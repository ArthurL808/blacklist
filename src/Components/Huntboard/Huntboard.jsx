import React, { Component } from "react";
import { connect } from "react-redux";
import Styles from "./Huntboard.module.scss";
import { loadActiveHuntsAsync } from "../../actions";
import moment from 'moment'

class Huntboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadActiveHunts();
  }

  render() {
    return (
      <div>
        <h1>Huntboard</h1>
        {this.props.hunts.map((hunt)=>{
          return(
            <div key={hunt.id}>
              <img src={hunt.person.image_url} />
              <p>Defendant: {hunt.person.last_name}, {hunt.person.first_name}</p>
              <p>Gender: {hunt.gender.gender}</p>
              <p>Height:  , Weight: </p>
              <p>Known to carry weapons:</p>
              <p>Charge with violent crime:</p>
              <p>
            DoB: {moment(hunt.person.dob).format('MMM DD, YYYY')} Age: {moment(hunt.person.dob).toNow(true)}
          </p>
          <h4>Known Addresses/Locations:</h4>
              <div>
                <p>{hunt.person.address}</p>
              </div>
              <div>
              <h4>Known associates</h4>
              {hunt.associates.map((associate)=>{
                return(
                  <div key={associate.id}>
                    <p>
                      {associate.last_name}, {associate.first_name}
                    </p>
                    <p>Nickname: {associate.nickname}</p>
                    <p>Relationship: {associate.relationship}</p>
                  </div>
                )
              })}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    hunts: state.hunts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadActiveHunts: () => {
      dispatch(loadActiveHuntsAsync());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Huntboard);
