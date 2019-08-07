import React, { Component } from 'react'

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class WhyScotiaBenifits extends Component {

    render() {
        const IMG = require('../assets/bg-2.jpg')

        return (
            <div id="why-scotia2" className="why-scotia2">
                <Box className="para-body">
                    <Typography style={{ fontWeight: '400', paddingBottom: '20px', paddingTop: '50px', color: "white", fontSize: '200%' }} align="left" variant="h1" component="h1"> Pay and Benefits </Typography>
                    <Box mb={3.0}>
                        <Box mb={3.0}>
                            <Typography style={{ fontWeight: '400', color: "white" }} align="left" variant="subtitle1" component="h5">
                                As a current student, or a recent graduate, money is undoubtedly on your mind. At Scotiabank, we provide you with not only base competitive market rate compensation, but incentive pay, insurance, retirement and savings plans. As a part of the Scotiabank team, we also enjoy various discount perks from a wide variety of food, entertainment, and services.
                            </Typography>
                        </Box>

                        <Typography style={{ fontWeight: '400', paddingBottom: '20px', color: "white", fontSize: '200%' }} align="left" variant="h1" component="h1"> Responsibilities </Typography>
                        <Box mb={3.0}>
                            <Typography style={{ color: "white" }} align="left" variant="subtitle1" component="h5">
                                At Scotiabank, we expect our employees to display not only the requirements of their role, but an ideology that we call AOO (Attitude, Ownership, and Opportunity).
                            </Typography>
                        </Box>

                        <Typography style={{ fontWeight: '400', paddingBottom: '20px', color: "white", fontSize: '200%' }} align="left" variant="h1" component="h1"> Opportunities </Typography>
                        <Box mb={3.0}>
                            <Typography style={{ fontWeight: '400', color: "white" }} align="left" variant="subtitle1" component="h5">
                                Scotiabank provides you with numerous opportunities to learn, to network, and to grow. You’ll be provided with tasks and projects to apply what you learn and showcase your skills. We’ll assist you in setting up coffee chats and job shadows to help you find your path. We’re passionate about the growth of our futureleaders, and the impacts that they can bring.
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
