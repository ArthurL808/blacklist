import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);


    this.state = {
        loggedIn: false,
        cosigners: [],
        defendants: []
    }
    
  }

  render(){
      return(
          <h1>Home Component</h1>
      )
  }
}

export default Home