import React, { Component } from 'react';

export default class Output extends Component {

    render() {
        return (
            <div >
                <p className="op">{this.props.result}</p>


            </div>
        )
    }
}