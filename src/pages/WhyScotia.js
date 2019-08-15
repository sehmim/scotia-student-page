import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

import '../styles/why-scotia.sass'
import { Box } from '@material-ui/core';

import MyCard from "../component/MyCard";
import WhyScotiaBenifits from './WhyScotiaBenifits';
import { fontSize } from '@material-ui/system';


const cardValues = [
    { title: 'Respect', img: require('../assets/icon/Respect.png'), details: 'Everyone is always treated with dignity; diverse backgrounds and experiences are what make us better as a whole.' },
    { title: 'Integrity', img: require('../assets/icon/Integrity.png'), details: 'Acting honorably comes first – earning the trust of our customers (and each other) is what matters most.' },
    { title: 'Passion', img: require('../assets/icon/Passion.png'), details: "We're passionate about what we do, and we'll make sure you are too!" },
    { title: 'Accountability', img: require('../assets/icon/Accountability.png'), details: 'We commit, we take action, and most importantly, we take responsibility for those actions.' },
]

const card2Values = [
    { title: 'Your Growth', img: require('../assets/icon/Growth.png'), details: 'We’ll support you with coaching and training, higher education, and career management tools.' },
    { title: 'Your Perks', img: require('../assets/icon/Perks.png'), details: 'We’ll work together to get you the most out of our compensation package.' },
    { title: 'Your Path', img: require('../assets/icon/Invest.png'), details: 'We’ll work hard alongside you to help you reach your full professional (and personal) potential.' },
    { title: 'Acceptance', img: require('../assets/icon/Accepted.png'), details: 'Our team is incredibly diverse, and we won’t just welcome you as you are, we’ll celebrate you as you are.' },
]

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
                    <Typography style={HEADER} align="center" variant="h4" component="h2"> Do Your Future Self a favor </Typography>
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


