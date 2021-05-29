import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    render() { 
        let classes = "badge m-2 badge-"
        classes += this.state.count ? "primary" : "warning";

        return (
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>
        </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count ? count : 'zero';
    }
}
 
export default Counter;