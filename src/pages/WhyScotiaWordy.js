import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

import { DETAIL_PARA } from "../utils/FirstThreePagesText";

const IMG = require('../assets/temp-bg.jpg')

const SUB_HEADER = {
    fontFamily: 'Scotia_W_Bd',
    fontWeight: '400',
    padding: '20px 20px 20px 0px',
    color: "white",
    fontSize: '300%'
}

const PARAGRAPHS = {
    fontSize: '110%',
    color: "white",
    fontFamily: "Scotia_W_Rg"

}

export default class WhyScotiaWordy extends Component {
    render() {
        return (
            <div >
                <div id="why-scotia2" className="why-scotia2">
                    <div className="img-body">
                        <img className="img-bg" src={IMG}></img>
                    </div>

                    <Box className="para-body" alignLeft>
                        <Typography style={SUB_HEADER} align="left" variant="h1" component="h1"> What we do </Typography>
                        <Box mb={3.0}>
                            <Typography style={PARAGRAPHS} align="left" variant="subtitle1" component="h5"> {DETAIL_PARA} </Typography>
                        </Box>
                    </Box>
                </div >
            </div >
        )
    }
}
