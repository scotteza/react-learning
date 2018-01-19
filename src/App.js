import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const scott = {
      first: "Scott",
      last: "Edwards"
    };
    const helloWorld = "Welcome to React, Scott!";
    const banana =
      "https://i5.walmartimages.ca/images/Enlarge/580/6_r/875806_R.jpg";
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <br />
        <img src={banana} />
      </div>
    );
  }
}

export default App;
