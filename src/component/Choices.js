import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import ProgramEach from "../component/ProgramEach";
import { Box } from '@material-ui/core';

function TabContainer(props) {
    const { children, dir } = props;

    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Undergrad co-op" />
                    <Tab label="Masters Internship" />
                    <Tab label="Fresh Grads" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                <TabContainer dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        <ProgramEach title='Banking Stuff' />
                        <ProgramEach title='Tech Stuff' />
                        <ProgramEach title='Marketing Stuff' />
                    </Box>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        <ProgramEach title='Banking Stuff' />
                        <ProgramEach title='Tech Stuff' />
                        <ProgramEach title='Marketing Stuff' />
                    </Box>
                </TabContainer>
                <TabContainer dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        <ProgramEach title='Banking Stuff' />
                        <ProgramEach title='Tech Stuff' />
                        <ProgramEach title='Marketing Stuff' />
                    </Box>
                </TabContainer>
            </SwipeableViews>
        </div>
    );
}