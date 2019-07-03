import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


export default class Event extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {console.log(this.props)}

            </div>
        )
    }
}
