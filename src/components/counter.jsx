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
    this.setState({ value: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.count })}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count ? count : "zero";
  }
}

export default Counter;
