import React, { Component } from "react";
import { connect } from "react-redux";
import { loadDeragatoryMarksAsync } from "../../actions";
import Searchbar from "../Searchbar";
import Styles from "./Home.module.scss";
import moment from "moment";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.props.loadDeragatoryMarks();
  }

  render() {
    return (
      <>
        <Searchbar error={this.props.personsSearch.error}/>
        
        {this.props.personsSearch.persons.length > 0 ? (
          <div>
            {this.props.personsSearch.persons.map((person) => {
              return (
                <div key={person.id}>
                  <a href={`/deragatoryMarks/onPerson/${person.id}`}>
                    <p>{person.last_name}, {person.first_name}</p>
                    {person.reasons.map((reason) => {
                      return <p key={reason.id}>{reason.reason}</p>;
                    })}
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Styles.container}>
            <div className={Styles.cardContainer}>
              <h3>Defendants</h3>
              {this.props.deragatoryMarks
                .filter((marks) => marks.person_role.includes("defendant"))
                .map((defenantMark) => {
                  return (
                    <div className={Styles.card} key={defenantMark.id}>
                      <a href={`/deragatoryMarks/onPerson/${defenantMark.onPerson.id}`}>
                        <p>First name: {defenantMark.onPerson.first_name}</p>
                        <p>Last name: {defenantMark.onPerson.last_name}</p>
                        <p>Deragatory Mark: {defenantMark.reason.reason}</p>
                        <p>Blacklisted By: {defenantMark.createdBy.name}</p>
                        <p>
                          Date created:{" "}
                          {moment(defenantMark.updated_at).fromNow()}
                        </p>
                      </a>
                    </div>
                  );
                })}
            </div>
            <div className={Styles.cardContainer}>
              <h3>Cosigners</h3>
              {this.props.deragatoryMarks
                .filter((marks) => marks.person_role.includes("cosigner"))
                .map((cosignerMark) => {
                  return (
                    <div className={Styles.card} key={cosignerMark.id}>
                      <a href={`/deragatoryMarks/onPerson/${cosignerMark.onPerson.id}`}>
                        <p>First name: {cosignerMark.onPerson.first_name}</p>
                        <p>Last name: {cosignerMark.onPerson.last_name}</p>
                        <p>Deragatory Mark: {cosignerMark.reason.reason}</p>
                        <p>Blacklisted By: {cosignerMark.createdBy.name}</p>
                        <p>
                          Date created:{" "}
                          {moment(cosignerMark.updated_at).fromNow()}
                        </p>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    deragatoryMarks: state.deragatoryMarks,
    personsSearch: state.persons.personsSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadDeragatoryMarks: () => {
      dispatch(loadDeragatoryMarksAsync());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
