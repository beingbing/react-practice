import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>
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
        return count ? count : 'zero';
    }
}
 
export default Counter;