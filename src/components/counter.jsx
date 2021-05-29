import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black'
    }

    render() { 
        return (
        <div>
            <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button style={{fontSize: 30}} className="btn btn-secondary btn-sm">increment</button>
        </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count ? count : 'zero';
    }
}
 
export default Counter;