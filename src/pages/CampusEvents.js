import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import '../styles/campus-events.sass'
import MyCalender from '../component/MyCalender';

export default class CampusEvents extends Component {
    render() {
        return (
            <div id="events" className="campus-events">
                <hr></hr>
                <Box my={4} >
                    <Typography align="center" variant="h2" component="h1"> Campus Events </Typography>
                </Box>
                <hr></hr>
                <MyCalender />
            </div>
        )
    }
}