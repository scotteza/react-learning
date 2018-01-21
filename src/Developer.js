import React, { Component } from "react";

class Developer extends Component {
  constructor(props) {
    super(props);
    this.firstname = props.firstname;
    this.lastname = props.lastname;
  }

  getName() {
    return this.firstname + " " + this.lastname;
  }

  render() {
    return <div>{this.getName()}</div>;
  }
}

export default Developer;
