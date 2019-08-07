import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';


const DETAIL_PARA = "Scotiabank has built a strong legacy of trust and commitment to its worldwide clients over the past 187 years. Following strict corporate governance practices allows us to respond to challenges and opportunities with legal and ethical actions. Our integrity is displayed in every decision we make. Whether it be upholding human rights, protecting our customers’ money, privacy and data or promoting a culture of inclusion, we lay foundations for the future through trust."
// const IMG = "https://www.scotiabank.com/content/dam/scotiabank/corporate/Images/DigitalFactory1.jpg"
const IMG = require('../assets/temp-bg.jpg')

export default class WhyScotiaWordy extends Component {
    render() {
        return (
            <div >
                <div id="why-scotia2" className="why-scotia2">
                    <div className="img-body">
                        <img className="img-bg" src={IMG}></img>
                    </div>

                    <Box className="para-body" alignLeft>
                        <Typography style={{ fontWeight: '400', padding: '20px 20px 20px 0px', color: "white", fontSize: '300%' }} align="left" variant="h1" component="h1"> What we do </Typography>
                        <Box mb={3.0}>
                            <Typography style={{ fontSize: '110%', color: "white" }} align="left" variant="subtitle1" component="h5"> {DETAIL_PARA} </Typography>
                        </Box>
                    </Box>
                </div >
            </div >
        )
    }
}
