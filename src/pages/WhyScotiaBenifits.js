import React, { Component } from 'react'

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Utils
import { WhyScotiaBenifitsPara1, WhyScotiaBenifitsPara2, WhyScotiaBenifitsPara3 } from "../utils/FirstThreePagesText";

const HEADER = {
    fontFamily: "Scotia_W_Headline",
    fontWeight: '400',
    paddingBottom: '20px',
    paddingTop: '50px',
    color: "white",
    fontSize: '200%'
}

const SUB_HEADER = {
    fontFamily: "Scotia_W_Rg",
    fontWeight: '400',
    color: "white"
}

export default class WhyScotiaBenifits extends Component {

    render() {
        const IMG = require('../assets/bg-2.jpg')

        return (
            <div id="why-scotia2" className="why-scotia2">
                <Box className="para-body">
                    <Typography style={HEADER} align="left" variant="h1" component="h1"> Pay and Benefits </Typography>
                    <Box mb={3.0}>
                        <Box mb={3.0}>
                            <Typography style={SUB_HEADER} align="left" variant="subtitle1" component="h5">
                                {WhyScotiaBenifitsPara1}
                            </Typography>
                        </Box>

                        <Typography style={HEADER} align="left" variant="h1" component="h1"> Responsibilities </Typography>
                        <Box mb={3.0}>
                            <Typography style={SUB_HEADER} align="left" variant="subtitle1" component="h5">
                                {WhyScotiaBenifitsPara2}
                            </Typography>
                        </Box>

                        <Typography style={HEADER} align="left" variant="h1" component="h1"> Opportunities </Typography>
                        <Box mb={3.0}>
                            <Typography style={SUB_HEADER} align="left" variant="subtitle1" component="h5">
                                {WhyScotiaBenifitsPara3}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <div className="img-body">
                    <img className="img-bg" src={IMG}></img>
                </div>
            </div >
        )
    }
}
