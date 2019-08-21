import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import '../styles/meet-the-team.sass'
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';



import { social_icons, DIRECTOR, MANAGERS, RECRUTERS, HEADER, HEADER2, SUB_HEADER } from "../utils/MeetTheTeamData";

export default class MeetTheTeam extends Component {
    render() {
        return (

            <div id="meet-the-team" className="meet-the-team">
                {console.log('public url: ', process.env.PUBLIC_URL)}
                <Box alignLeft my={3.0}>
                    <Typography variant="h4" component="h2"
                        align="center" style={HEADER} > Meet The Team </Typography>
                </Box>

                {/* MICHEAL SHELSEN */}
                <hr></hr>
                <Box>
                    <Typography style={HEADER2} align="center" > The Director </Typography>
                </Box>
                <hr></hr>
                <Grid align="center" >
                    {/* <Avatar size="big" alt="MICHEAL SHELSEN" src="" /> */}
                    <Box mb={3.0} >
                        <img className="avatar" src={DIRECTOR.img} />
                        <Typography style={SUB_HEADER} minH my={10.0} variant="h4" component="h1"> {DIRECTOR.name} </Typography>
                        <Typography style={SUB_HEADER} variant="subtitle2" component="p"> {DIRECTOR.title} </Typography>
                        <a href='https://www.linkedin.com/in/michaelshelsen'>
                            <img className="avatar-linkedin" src={social_icons.linkedIn} />
                        </a>
                    </Box>
                </Grid>
                {/* THE MANAGERS */}

                <hr></hr>
                <Box>
                    <Typography style={HEADER2} align="center" variant="h4" component="h2"> The Program Managers </Typography>
                </Box>
                <hr></hr>

                <Box my={6.0} justifyContent="center" display="flex" flexWrap="wrap" justifyDirection="row" >
                    {
                        MANAGERS.map((item, index) => {
                            return (
                                <Box className="avatar-box" key={index} >
                                    <img className="avatar-2" src={item.img} />
                                    <Typography style={SUB_HEADER} my={10.0} variant="h5" component="h4"> {item.name} </Typography>
                                    <Typography style={SUB_HEADER} variant="subtitle2" component="p"> {item.title} </Typography>
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
                                    <Typography style={SUB_HEADER} my={10.0} variant="h5" component="h4"> {item.name} </Typography>
                                    <Typography style={SUB_HEADER} variant="subtitle2" component="p" variant="subtitle2" component="p"> {item.title} </Typography>
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
