import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (cnt) => {
    console.log("cnt ", cnt);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.value })}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value ? value : "zero";
  }
}

export default Counter;
