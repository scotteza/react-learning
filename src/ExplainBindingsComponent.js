import React, { Component } from "react";

class ExplainBindingsComponent extends Component {
  constructor(props) {
    super(props);

    // If you don't bind, "this" is undefined later in the component
    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
    console.log(this);
  }

  // Class methods are bound automatically if you use an arrow function
  onClickMeToo = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickMe} type="button">
            Click me to learn about bindings in the console
          </button>
        </div>
        <div>
          <button onClick={this.onClickMeToo} type="button">
            Click me TOO to learn about bindings in the console
          </button>
        </div>
      </div>
    );
  }
}

export default ExplainBindingsComponent;
