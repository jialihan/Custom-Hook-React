const { default: classes } = require("*.module.css");

import React, { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hex: "",
    };
    this.change = this.change.bind(this);
  }
  // not valid in javascript, but react transplier will do translate it for us
  // not valid javascript, but the arrow function means lexical scope,
  // of the class, so the value of this should always be the instance of that class
  change = (e) => {
    // this keywork invoved in class component
    this.setState({ ...this.state, name: e.target.name });
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.name} onChange={this.change} />
        </form>
      </div>
    );
  }
}

export default FormClass;
