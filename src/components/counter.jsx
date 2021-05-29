import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        console.log('handle increment ', this);
    }

    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">increment</button>
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