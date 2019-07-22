import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import '../styles/meet-the-team.sass'
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';


const MICHEAL_IMG = process.env.PUBLIC_URL + "/assets/Micheal.jpg"


const social_icons = {
    linkedIn: 'https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png'
}
const DIRECTOR = {
    name: 'Micheal Shelsen',
    title: 'Director of Global Campus Talent Acquisition and Development',
    img: "../Michael.jpg",
    href: 'https://www.linkedin.com/in/michaelshelsen'
}
const MANAGERS = [
    {
        name: 'Arina Levko',
        title: 'Manager, Campus Recruitment Technology Solutions and Digital',
        img: '../../public/assets/recruiters/Arina.jpg',
        linkedIn: 'https://www.linkedin.com/in/arinalevko/'
    },
    {
        name: 'Jessica McKenzie',
        title: 'Program Manager, Ignition and Velocity',
        img: '../../public/assets/recruiters/Jessica.jpg',
        linkedIn: 'https://www.linkedin.com/in/jessicamckenzie-scotiabank/'
    },
    {
        name: 'Ashley Routliffe',
        title: "Manager, Campus Recruitment Operations and Enterprise Functions",
        img: 'https://media.licdn.com/dms/image/C5103AQFyC62z37Mh9A/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=zvsCitmS2dVY2hcBai22tMT5S2tf9ccA35f4auyn7tI',
        linkedIn: 'https://www.linkedin.com/in/ashley-routliffe-4b865153/'
    },
    {
        name: 'Kathy Smart',
        title: 'Sr. Program Manager, Commercial Accelerate Program',
        img: 'https://media.licdn.com/dms/image/C5603AQHgqtWelE-Amw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=Mopg40BYtnv-ziS1SzDDQegU8lytl4Afe2kXFscQJeU',
        linkedIn: 'https://www.linkedin.com/in/smartkathy/'
    },
    {
        name: 'Jena Mesih',
        title: 'Sr. Program Manager, Catalyst Program',
        img: 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg',
        linkedIn: 'https://www.linkedin.com/in/jenamesih'
    }
]

const RECRUTERS = [
    {
        name: 'Adrian Hawkings',
        title: 'Recruitment Lead, Wealth Management',
        img: 'https://media.licdn.com/dms/image/C5603AQGU_MaScIWZxw/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=nLm3Ir-fsKYK46ouM4TznfHwmrLDN8pmvcYIT8-aLDY',
        linkedIn: 'https://www.linkedin.com/in/adrianhawkings/'
    },
    {
        name: 'Ryan Kwast',
        title: 'Campus Recruiter for Technology and Digital',
        img: 'https://media.licdn.com/dms/image/C5603AQFHcIss5z4LJg/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=bAzLWqfk2AkKVmHJsY8LV3lGbyA2hTm__sRtWAxj-Bs',
        linkedIn: 'https://www.linkedin.com/in/ryankwast/'
    },
    {
        name: 'Chrystalla Themistocleous',
        title: 'University Relations',
        img: 'https://media.licdn.com/dms/image/C5603AQGQeDSobngUJg/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=pGac_VdilagFM-U-XWsqGazoRmuv2PZlgV527oNjrX4',
        linkedIn: 'https://www.linkedin.com/in/chrystallasui'
    },
    {
        name: 'Katie Dutton',
        title: 'Campus Talent Attraction Recruiter- Commercial Banking',
        img: 'https://media.licdn.com/dms/image/C5603AQFbhRL7TUjwow/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=rMcvyp6v9qqPbjMD5NeCDrHQVcf5jXvFqZEF81g5Qpc',
        linkedIn: 'https://www.linkedin.com/in/katie-dutton-293112140/'
    },
    {
        name: 'Jennifer Slegers',
        title: 'Campus Talent Attraction Lead, Capital Markets',
        img: 'https://media.licdn.com/dms/image/C4E03AQEppss7IGaFbg/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=6WJb4Ei7K9-rauRzG3KXKjI0htzrCSaKPj77qKirkms',
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

                <Box justifyContent="center" display="flex" flexWrap="wrap" justifyDirection="row" >
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

                <Box justifyContent="center" display="flex" flexWrap="wrap" justifyDirection="row" >
                    {
                        RECRUTERS.map((item, index) => {
                            return (
                                <Box className="avatar-box" key={index} >
                                    <img className="avatar-2" src={item.img} />
                                    <Typography my={10.0} variant="h5" component="h4"> {item.name} </Typography>
                                    <Typography variant="subtitle2" component="p"> {item.title} </Typography>
                                    <a src={item.linkedIn}>
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
