import React, { Component } from 'react'

import Calendar from 'react-calendar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { Box } from '@material-ui/core';

const list_of_events = [
    {
        title: 'Event 1',
        date: new Date('July 20, 2019 12:00:00'),
        details: 'Details For Events'
    },
    {
        title: 'Event 2',
        date: new Date('June 21, 2019 12:00:00'),
        details: 'Details For Events'
    },
    {
        title: 'Event 3',
        date: new Date('June 22, 2019 12:00:00'),
        details: 'Details For Events'
    }
]

export default class MyCalender extends Component {

    state = {
        date: new Date(),
        eventDetails: {
            title: 'Events',
            details: '',
        }
    }

    onChange = (date) => {
        this.setState({ date })
        list_of_events.forEach(element => {
            if ((element.date.getDate() === this.state.date.getDate())
                &&
                (element.date.getMonth() === this.state.date.getMonth())) {
                console.log('Hi')
            }
        });
    }
    render() {
        return (
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-around" >
                <Calendar style={{ cursor: 'pointer' }}
                    calendarType='ISO 8601'
                    onChange={this.onChange}
                    value={this.state.date}
                    onClickDay={this.showEvent}
                />
                <div>
                    <Card>
                        <Typography>
                            Title:
                    </Typography>
                        <Typography>
                            Date: {this.state.date.toDateString()}
                        </Typography>
                        <Typography>
                            Details:
                    </Typography>
                    </Card>
                </div>
            </Box>
        )
    }
}