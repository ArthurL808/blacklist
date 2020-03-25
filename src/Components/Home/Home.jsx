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
            <h1>Defendnats</h1>
            {this.props.home.defendants.map(defendant => {
              console.log(defendant)
              return (
                <div className={Styles.card} key={defendant.id}>
                  <h4>{defendant.first_name}</h4>
                  <p>{defendant.last_name}</p>
                </div>
              );
            })}
          </div>
          <div className={Styles.cardContainer}>
            <h1>Cosigners</h1>
            {this.props.home.cosigners.map(cosigner => {
              console.log(cosigner)
              return (
                <div className={Styles.card} key={cosigner.id}>
                  <h4>{cosigner.first_name}</h4>
                  <p>{cosigner.last_name}</p>
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
  return {
    home: state
  };
};

export default connect(mapStateToProps)(Home);
