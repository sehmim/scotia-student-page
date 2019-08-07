import React, { Component } from 'react'

import "../styles/landing-page.sass";
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const BG_IMG_URL = require('../assets/back-svg.png')

export default class LandingPage extends Component {
    render() {
        return (

            <div id="home" className="landing-page">
                <Box className="title-body">
                    <h1 className="title-body-title"> Scotia Student Hub </h1>
                </Box>
                <div className="landing-page-img-body">
                    <img className="landing-page-img-bg" src={BG_IMG_URL}></img>
                </div>
            </div >

        )
    }
}
