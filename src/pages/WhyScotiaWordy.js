import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

const IMG = "placeholder.png"
export default class WhyScotiaWordy extends Component {
    render() {
        return (
            <div id="why-scotia" className="why-scotia">
                <Box alignLeft mt={3.0} mb={3.0}>
                    <Typography align="left" variant="h2" component="h1"> Why Scotiabank </Typography>
                </Box>
                <Box my={3.0}>
                    <Typography align="left" variant="h5" component="h5"> Because your career is a journey - choose the path that allows you to thrive. </Typography>
                </Box>
                <img className="img-bg" style={{ alignContent: 'center' }} src="http://www.elizabethgoulart.com/gallery/Toronto_Harbourfront_Condos/2-Scotiabank_Arena-Elizabeth_Goulart-BROKER.jpg"></img>
                <Box alignLeft mt={3.0} mb={3.0}>
                    <Typography align="left" variant="h2" component="p"> What we do </Typography>
                </Box>
                <Box alignLeft mt={3.0} mb={3.0}>
                    <ul>
                        <li>
                            <Typography align="left" variant="subtitle1" component="p">
                                As Canada’s most international bank, Scotiabank aims to provide our clients and employees the best oppurtunity to succeed and are driven to help make the decisions that are right for everyone, every step of the way.
                            </Typography>
                        </li>
                        <li>
                            <Typography align="left" variant="subtitle1" component="p">
                                We’re driven to succeed through our employees and by our core values that put our people first. We’re performance based and reward our employees by their contributions.
                            </Typography>
                        </li>
                        <li>
                            <Typography align="left" variant="subtitle1" component="p">
                                We’ve got our sights set on the future because we’re always looking for better ways of doing things. Our forward-thinking, as well as our supportive culture, is what brings our entire international team together.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </div >
        )
    }
}
