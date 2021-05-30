import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 9 },
      { id: 3, value: 5 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counter.map((cntr) => (
          <Counter key={cntr.id} value={cntr.value}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
