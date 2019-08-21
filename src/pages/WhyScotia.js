import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

import MyCard from "../component/MyCard";

import { cardValues, card2Values } from "../utils/FirstThreePagesText";

const HEADER = {
    fontFamily: "Scotia_W_Headline",
    fontSize: '50px'
}
const HEADER2 = {
    fontFamily: "Scotia_W_Bd"
}

const SUB_HEADER = {
    fontFamily: "Scotia_W_Rg"
}

export default class WhyScotia extends Component {
    render() {
        return (
            <div id="why-scotia" className="why-scotia">
                <hr></hr>
                <Box alignCenter mt={3.0}>
                    <Typography style={HEADER} align="center" variant="h2" component="h1"> Why Scotiabank </Typography>
                </Box>
                <Box mb={3.0}>
                    <Typography style={SUB_HEADER} align="center" variant="subtitle1" component="h5"> Because your career is a journey - choose the path that allows you to thrive. </Typography>
                </Box>
                <hr></hr>
                <Box my={3.0}>
                    <Typography style={HEADER2} align="center" variant="h4" component="h5"> Our Values </Typography>
                </Box>
                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" >
                    {
                        cardValues.map((item, index) => {
                            return (
                                <MyCard key={index} detailEach={item} ></MyCard>
                            )
                        })
                    }
                </Box>

                <Box my={3.0}>
                    <Typography style={HEADER2} align="center" variant="h4" component="h2"> Do Your Future Self a favor </Typography>
                </Box>

                <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" >
                    {
                        card2Values.map((item, index) => {
                            return (
                                <MyCard key={index} detailEach={item} ></MyCard>
                            )
                        })
                    }
                </Box>
            </div >
        )
    }
}


