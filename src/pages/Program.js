import React, { Component } from 'react'
import ProgramEach from '../component/ProgramEach';
import { Box } from '@material-ui/core';
import Choices from '../component/Choices'
import Typography from '@material-ui/core/Typography';

const programDetail = [
    {
        programTitle: '', subDetails: "This impressive paella is a perfect party dish."
    }
]


export default class Program extends Component {
    render() {
        return (
            <div id="programs" style={{ margin: '7vw' }}>
                <hr></hr>
                <Box my={3} >
                    <Typography align="center" variant="h2" component="h1"> Programs </Typography>
                </Box>
                <hr></hr>
                <Box mt={6} display="flex" justifyContent="space-around" flexWrap="wrap" >
                    <Choices />
                </Box>
            </div>
        )
    }
}
