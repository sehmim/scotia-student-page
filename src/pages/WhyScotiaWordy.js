import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

const IMG = "placeholder.png"
export default class WhyScotiaWordy extends Component {
    render() {
        return (
            <div id="why-scoti2" className="why-scotia2">
                <Box display="flex" flexDirection="row" flexWrap="wrap">
                    <Box>
                        <img className="img-bg" src="http://www.elizabethgoulart.com/gallery/Toronto_Harbourfront_Condos/2-Scotiabank_Arena-Elizabeth_Goulart-BROKER.jpg"></img>
                    </Box>
                    <Box>
                        <Box alignLeft>
                            <Typography align="left" variant="h2" component="p"> What we do </Typography>
                        </Box>
                    </Box>
                </Box>
            </div >
        )
    }
}
