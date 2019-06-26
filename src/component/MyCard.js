import React, { Component } from 'react'
import '../styles/card.sass'

import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export default class MyCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    };
    render() {
        return (
            <div className="cardMain">
                <div className="card">
                    <div className="card_side card_side--front" href="#">
                        <img className="card-img" src={this.props.detailEach.img}></img>
                        <Box>
                            <Typography className="header-item" variant="subtitle1" component="p"> {this.props.detailEach.title} </Typography>
                        </Box>
                        {console.log(this.props.detailEach)}
                    </div>
                    <div className="card_side card_side--back">
                        <p className="body-item"> {this.props.detailEach.details} </p>
                    </div>
                </div>
            </div>
        )
    }
}
