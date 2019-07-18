import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

import MyCard from "../component/MyCard";


const cardValues = [
    { title: 'Respect', img: 'https://i.imgur.com/y6SW8XD.png', details: 'Everyone is always treated with dignity; diverse backgrounds and experiences are what make us better as a whole.' },
    { title: 'Integrity', img: 'https://i.imgur.com/HFKOprR.png', details: 'Acting honorably comes first – earning the trust of our customers (and each other) is what matters most.' },
    { title: 'Passion', img: 'https://i.imgur.com/05Eec7W.png', details: 'We’re enthusiastic about what we do, and want you to feel the same way. Imagine coming in to work, and actually feeling excited to learn!' },
    { title: 'Accountability', img: 'https://i.imgur.com/i30dZZR.png', details: 'We commit, we take action, and most importantly, we take responsibility for those actions. It’s just the right thing to do.' },
]

const card2Values = [
    { title: 'Go somewhere that helps you grow', img: '', details: 'What direction do you want to go in? We’ll support you every step of the way with on-the-job coaching and training programs, higher education courses, and career management tools.' },
    { title: 'Go somewhere with perks', img: 'https://i.imgur.com/N49aUJP.png', details: 'We’ll work together to help you get the most out of our compensation package. That includes your base compensation, incentive pay, benefits, retirement and savings plans.' },
    { title: 'Go somewhere that invests in you', img: 'https://i.imgur.com/k61g5ZV.png', details: 'When it comes to your success, we’ll pull out all the stops. We’ll work hard alongside you to help you reach your full professional (and personal) potential.' },
    { title: 'Go somewhere that fully accepts you', img: 'https://i.imgur.com/NU11Klo.png', details: 'Our team is incredibly diverse, and we like it that way. We won’t just welcome you as you are, we’ll celebrate you as you are.' },
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


