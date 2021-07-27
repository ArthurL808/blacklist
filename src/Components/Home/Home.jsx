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
        <div>
          <Searchbar error={this.props.personsSearch.error} />
          <a href={`/newPerson`}>Add new person to blacklist</a>
        </div>

        {this.props.personsSearch.persons.length > 0 ? (
          <div>
            {this.props.personsSearch.persons.map((person) => {
              return (
                <div key={person.id}>
                  <a href={`/deragatoryMarks/onPerson/${person.id}`}>
                    <p>
                      {person.last_name}, {person.first_name}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={Styles.container}>
            <div className={Styles.cardContainer}>
              <h3>Latest Blacklisted Clients</h3>
              {/* need this to be more dynamic */}
              {this.props.deragatoryMarks
                .slice((0, 5))
                .map((recentMarks) => {
                  console.log(recentMarks);
                  return (
                    <div className={Styles.card} key={recentMarks.id}>
                      <a
                        href={`/deragatoryMarks/onPerson/${recentMarks.onPerson.id}`}
                      >
                        <p>First name: {recentMarks.onPerson.first_name}</p>
                        <p>Last name: {recentMarks.onPerson.last_name}</p>
                        {/* possibly display what marks where checked here.  */}
                        {/* <p>Deragatory Mark: {defenantMark.reason.reason}</p> */}
                        <p>Blacklisted By: {recentMarks.createdBy.name}</p>
                        <p>
                          Date created:{" "}
                          {moment(recentMarks.updated_at).fromNow()}
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
