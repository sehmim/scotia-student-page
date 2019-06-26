import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import '../styles/meet-the-team.sass'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
export default class MeetTheTeam extends Component {
    render() {
        return (
            <div className="meet-the-team">
                <Box alignLeft mt={3.0} mb={9.0}>
                    <Typography align="left" variant="h2" component="h1"> Meet The Team </Typography>
                    <Typography align="left" variant="subtitle1" component="h1"> Even Kawhi Leonard has a team behind his back, here's yours </Typography>
                </Box>

                {/* MICHEAL SHELSEN */}

                <Grid display="flex" flexDirection="row" flexWrap="wrap" >
                    <Box my={3.0}>
                        <Typography align="left" variant="h2" component="h2"> The Director </Typography>
                    </Box>
                    {/* <Avatar size="big" alt="MICHEAL SHELSEN" src="" /> */}
                    <Box justify="" >
                        <img className="avatar" src="https://media.licdn.com/dms/image/C4E03AQH6_9LadYrBxA/profile-displayphoto-shrink_800_800/0?e=1567036800&v=beta&t=p6af7pzjWkvtCO_MB2HlQYoSpJXCfBOwqf4nKAFJit8" />
                        <Typography my={10.0} variant="h4" component="h2"> Micheal Shelsen </Typography>
                        <Typography variant="subtitle1" component="p"> Director of Global Campus Talent Acquisition and Development </Typography>
                        <a src="https://www.linkedin.com/in/michaelshelsen/">
                            <img className="avatar-linkedin" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png" />
                        </a>
                    </Box>
                </Grid>

            </div>
        )
    }
}
