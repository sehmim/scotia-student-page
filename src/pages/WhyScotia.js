import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

import MyCard from "../component/MyCard";


const cardValues = [
    { title: 'Respect', img: require('../assets/icon/Respect.png'), details: 'Everyone is always treated with dignity; diverse backgrounds and experiences are what make us better as a whole.' },
    { title: 'Integrity', img: require('../assets/icon/Integrity.png'), details: 'Acting honorably comes first – earning the trust of our customers (and each other) is what matters most.' },
    { title: 'Passion', img: require('../assets/icon/Passion.png'), details: 'We’re enthusiastic about what we do, and want you to feel the same way. Imagine coming in to work, and actually feeling excited to learn!' },
    { title: 'Accountability', img: require('../assets/icon/Accountability.png'), details: 'We commit, we take action, and most importantly, we take responsibility for those actions. It’s just the right thing to do.' },
]

const card2Values = [
    { title: 'Your Growth', img: require('../assets/icon/Growth.png'), details: 'What direction do you want to go in? We’ll support you every step of the way with on-the-job coaching and training programs, higher education courses, and career management tools.' },
    { title: 'Your Perks', img: require('../assets/icon/Perks.png'), details: 'We’ll work together to help you get the most out of our compensation package. That includes your base compensation, incentive pay, benefits, retirement and savings plans.' },
    { title: 'Your Future Investment', img: require('../assets/icon/Invest.png'), details: 'When it comes to your success, we’ll pull out all the stops. We’ll work hard alongside you to help you reach your full professional (and personal) potential.' },
    { title: 'Acceptance', img: require('../assets/icon/Accepted.png'), details: 'Our team is incredibly diverse, and we like it that way. We won’t just welcome you as you are, we’ll celebrate you as you are.' },
]
export default class WhyScotia extends Component {
    render() {
        return (
            <div id="why-scotia" className="why-scotia">
                <hr></hr>
                <Box alignCenter mt={3.0}>
                    <Typography align="center" variant="h2" component="h1"> Why Scotiabank </Typography>
                </Box>
                <Box mb={3.0}>
                    <Typography align="center" variant="subtitle1" component="h5"> Because your career is a journey - choose the path that allows you to thrive. </Typography>
                </Box>
                <hr></hr>
                <Box my={3.0}>
                    <Typography align="center" variant="h4" component="h5"> Our Values </Typography>
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
                    <Typography align="center" variant="h4" component="h2"> Do Your Future Self a favor </Typography>
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


