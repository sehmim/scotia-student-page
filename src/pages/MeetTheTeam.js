import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import '../styles/meet-the-team.sass'
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';




const social_icons = {
    linkedIn: 'https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png'
}
const DIRECTOR = {
    name: 'Micheal Shelsen',
    title: 'Director of Global Campus Talent Acquisition and Development',
    img: require("../assets/Micheal.png"),
    href: 'https://www.linkedin.com/in/michaelshelsen'
}
const MANAGERS = [
    {
        name: 'Arina Levko',
        title: 'Manager, Campus Recruitment Technology Solutions and Digital',
        img: require('../assets/recruiters/Arina.jpg'),
        linkedIn: 'https://www.linkedin.com/in/arinalevko/'
    },
    {
        name: 'Jessica McKenzie',
        title: 'Program Manager, Ignition and Velocity',
        img: require('../assets/recruiters/Jessica.jpg'),
        linkedIn: 'https://www.linkedin.com/in/jessicamckenzie-scotiabank/'
    },
    {
        name: 'Ashley Routliffe',
        title: "Campus Recruitment Operations and Enterprise Functions",
        img: require('../assets/recruiters/Ashley.jpg'),
        linkedIn: 'https://www.linkedin.com/in/ashley-routliffe-4b865153/'
    },
    {
        name: 'Kathy Smart',
        title: 'Sr. Program Manager, Commercial Accelerate Program',
        img: require('../assets/recruiters/Kathy.jpg'),
        linkedIn: 'https://www.linkedin.com/in/smartkathy/'
    },
    {
        name: 'Jena Mesih',
        title: 'Sr. Program Manager, Catalyst Program',
        img: require('../assets/recruiters/Jena.jpg'),
        linkedIn: 'https://www.linkedin.com/in/jenamesih'
    }
]

const RECRUTERS = [
    {
        name: 'Adrian Hawkings',
        title: 'Recruitment Lead, Wealth Management',
        img: require('../assets/recruiters/Adrian.jpg'),
        linkedIn: 'https://www.linkedin.com/in/adrianhawkings/'
    },
    {
        name: 'Ryan Kwast',
        title: 'Campus Recruiter for Technology and Digital',
        img: require('../assets/recruiters/Ryan.jpg'),
        linkedIn: 'https://www.linkedin.com/in/ryankwast/'
    },
    {
        name: 'Chrystalla Themistocleous',
        title: 'University Relations',
        img: require('../assets/recruiters/Chrystalla.jpg'),
        linkedIn: 'https://www.linkedin.com/in/chrystallasui'
    },
    {
        name: 'Katie Dutton',
        title: 'Campus Talent Attraction Recruiter- Commercial Banking',
        img: require('../assets/recruiters/Katie.jpg'),
        linkedIn: 'https://www.linkedin.com/in/katie-dutton-293112140/'
    },
    {
        name: 'Jennifer Slegers',
        title: 'Campus Talent Attraction Lead, Capital Markets',
        img: require('../assets/recruiters/Jen1.jpg'),
        linkedIn: 'https://www.linkedin.com/in/jennifer-slegers-1749018a/'
    }
]

export default class MeetTheTeam extends Component {
    render() {
        return (

            <div id="meet-the-team" className="meet-the-team">
                {console.log('public url: ', process.env.PUBLIC_URL)}
                <Box alignLeft my={3.0}>
                    <Typography align="center" variant="h2" component="h1"> Meet The Team </Typography>
                </Box>

                {/* MICHEAL SHELSEN */}
                <hr></hr>
                <Box>
                    <Typography align="center" variant="h4" component="h2"> The Director </Typography>
                </Box>
                <hr></hr>
                <Grid align="center" >
                    {/* <Avatar size="big" alt="MICHEAL SHELSEN" src="" /> */}
                    <Box mb={3.0} >
                        {console.log('POOOP', DIRECTOR.img)}
                        <img className="avatar" src={DIRECTOR.img} />
                        <Typography minH my={10.0} variant="h4" component="h2"> {DIRECTOR.name} </Typography>
                        <Typography variant="subtitle1" component="p"> {DIRECTOR.title} </Typography>
                        <a href='https://www.linkedin.com/in/michaelshelsen'>
                            <img className="avatar-linkedin" src={social_icons.linkedIn} />
                        </a>
                    </Box>
                </Grid>
                {/* THE MANAGERS */}

                <hr></hr>
                <Box>
                    <Typography align="center" variant="h4" component="h2"> The Program Managers </Typography>
                </Box>
                <hr></hr>

                <Box my={6.0} justifyContent="center" display="flex" flexWrap="wrap" justifyDirection="row" >
                    {
                        MANAGERS.map((item, index) => {
                            return (
                                <Box className="avatar-box" key={index} >
                                    <img className="avatar-2" src={item.img} />
                                    <Typography my={10.0} variant="h5" component="h4"> {item.name} </Typography>
                                    <Typography variant="subtitle2" component="p"> {item.title} </Typography>
                                    <a href={item.linkedIn}>
                                        <img className="avatar-linkedin" src={social_icons.linkedIn} />
                                    </a>
                                </Box>
                            )
                        }
                        )
                    }
                </Box>

                {/* THE RECRUTERS */}

                <hr></hr>
                <Box>
                    <Typography align="center" variant="h4" component="h2"> The Recruiters </Typography>
                </Box>
                <hr></hr>

                <Box my={6.0} justifyContent="center" display="flex" flexWrap="wrap" justifyDirection="row" >
                    {
                        RECRUTERS.map((item, index) => {
                            return (
                                <Box className="avatar-box" key={index} >
                                    <img className="avatar-2" src={item.img} />
                                    <Typography my={10.0} variant="h5" component="h4"> {item.name} </Typography>
                                    <Typography variant="subtitle2" component="p"> {item.title} </Typography>
                                    <a href={item.linkedIn}>
                                        <img className="avatar-linkedin" src={social_icons.linkedIn} />
                                    </a>
                                </Box>
                            )
                        }
                        )
                    }
                </Box>

            </div >
        )
    }
}
