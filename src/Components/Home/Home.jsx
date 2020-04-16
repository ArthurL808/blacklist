import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHomeAsync } from "../../actions";
import Styles  from "./Home.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    this.props.dispatch(loadHomeAsync());
    console.log(this.props);
  }

  render() {
    return (
      <>
        <h1>Home Component</h1>
        <div className={Styles.container}>
          <div className={Styles.cardContainer}>
            <h1>Defendants</h1>
            {this.props.home.map(marks => {
              return (
                <div className={Styles.card} key={marks.id}>
                  <h4>{marks.onPerson.first_name}</h4>
                  <p>{marks.onPerson.last_name}</p>
                </div>
              );
            })}
          </div>
          <div className={Styles.cardContainer}>
            <h1>Cosigners</h1>
            {this.props.home.map(marks => {
              return (
                <div className={Styles.card} key={marks.id}>
                  <h4>{marks.onPerson.first_name}</h4>
                  <p>{marks.onPerson.last_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    home: state.marks
  };
};

export default connect(mapStateToProps)(Home);
