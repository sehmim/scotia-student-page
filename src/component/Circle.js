import React, { Component } from 'react'

// styles 
import "../styles/second-page.sass";

export default class Circle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ backgroundColor: this.props.detail.color }} className="circle-body">
                <h1 className="circle-header">
                    {this.props.detail.title}
                </h1>
            </div>
        )
    }
}
