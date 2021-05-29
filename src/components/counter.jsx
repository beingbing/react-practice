import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    render() { 
        return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count ? count : 'zero';
    }
}
 
export default Counter;