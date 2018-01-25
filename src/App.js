import React, { Component } from "react";
import "./App.css";
import Developer from "./Developer";
import IAmAStatelessFunctionalComponent from "./IAmAStatelessFunctionalComponent";
import ExplainBindingsComponent from "./ExplainBindingsComponent";
// import Table from "./components/Table";
// import Search from "./components/Search";

// Basic React forms: https://reactjs.org/docs/forms.html

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

// ES5 way
// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   };
// }

// ES6 way
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // Destructuring 1
    const user = {
      firstname: "Robin",
      lastname: "Wieruch"
    };
    const { firstname, lastname } = user;
    console.log(firstname, lastname);
    // Destructuring 2
    const users = ["Robin", "Andrew", "Dan"];
    const [u1, u2, u3] = users;
    console.log(u1, u2, u3);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
    // console.log(this.state.searchTerm);
    // console.log(event.target.value);
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
    // Using destructuring here
    const { searchTerm, list } = this.state;

    // Same as saying:
    // var searchTerm = this.state.searchTerm;
    // var list = this.state.list;

    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange}>
          Search
        </Search>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
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

const Search = ({ value, onChange, children }) => (
  <form>
    {children}
    <input type="text" value={value} onChange={onChange} />
  </form>
);

const Table = ({ list, pattern, onDismiss }) => (
  <div>
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <Button onClick={() => onDismiss(item.objectID)} type="button">
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

const Button = ({ onClick, className = "", children }) => (
  <button onClick={onClick} className={className} type="button">
    {children}
  </button>
);

export default App;
