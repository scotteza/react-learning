import React, { Component } from "react";
import "./App.css";
import Developer from "./Developer";
import IAmAStatelessFunctionalComponent from "./IAmAStatelessFunctionalComponent";
import ExplainBindingsComponent from "./ExplainBindingsComponent";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    // Define an isNotId function.
    // Not that this is an arrow function with a single param, so we don't need to say (item) and it has an implicit "return" statement
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    // We could also say:
    // const updatedList = this.state.list.filter(item => item.objectID !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
        <div>
          <Developer firstname="Bob" lastname="Smith" />
        </div>
        <div>
          <Developer firstname="Jane" lastname="Jones" />
        </div>
        <div>
          <IAmAStatelessFunctionalComponent firstname="Banana" lastname="Jam" />
        </div>
        <div>
          <ExplainBindingsComponent />
        </div>
      </div>
    );
  }
}

export default App;
