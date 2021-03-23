import React, { Component } from 'react';

export default class Scoreboard extends Component {
    render() {
        return (
            <div className="calculator_scoreboard">
                <p>{this.props.memory}</p>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}
