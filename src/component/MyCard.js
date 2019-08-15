import React, { Component } from 'react'
import '../styles/card.sass'

import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const HEADER = {
    fontFamily: "Scotia_W_Bd",
}

const PARAGRAPH = {
    fontFamily: "Scotia_W_Rg"
}

export default class MyCard extends Component {

    render() {
        return (
            <div className="cardMain">
                <div className="card">
                    <div className="card_side card_side--front" href="#">
                        <img className="card-img" src={this.props.detailEach.img}></img>
                        <Box>
                            <Typography style={HEADER} className="header-item" variant="subtitle1" component="p"> {this.props.detailEach.title} </Typography>
                        </Box>
                    </div>
                    <div className="card_side card_side--back">
                        <p style={PARAGRAPH} className="body-item"> {this.props.detailEach.details} </p>
                    </div>
                </div>
            </div>
        )
    }
}
