import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { green } from '@material-ui/core/colors';
import ProgramEach from "../component/ProgramEach";
import { Box } from '@material-ui/core';

import { TechPrograms } from "../utils/TechPrograms";
import { BankingProgram } from "../utils/BankingProgram";
import { OperationsProgram } from "../utils/OperationProgram";
import { OtherPrograms } from "../utils/OtherPrograms";

import '../styles/why-scotia.sass'

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
        height: '100%'

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
    tab: {
        fontSize: '10px',
    },
    tabContainer: {
        minHeight: '400px'
    }
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

    const labelMaker = (title, img) => {
        return (
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', }} >
                <img className="appbar-img" src={img}></img>
                <p>{title}</p>
            </div >
        )
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">

                <Tabs
                    style={{ padding: '10px', fontSize: '10px' }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab className={classes.tab} label={labelMaker('Technology', require('../assets/technology2.png'))} />
                    <Tab className={classes.tab} label={labelMaker('Banking', require('../assets/banking2.png'))} />
                    <Tab className={classes.tab} label={labelMaker('Operations', require('../assets/operations.png'))} />
                    <Tab className={classes.tab} label={labelMaker('Specialties', require('../assets/specialties2.png'))} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >

                {/* -------- TECHNOLOGY ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            TechPrograms.map((item, index) => {
                                return (
                                    <ProgramEach link={item.link} img={item.img} title={item.title} details={item.details} options={item.where} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>

                {/* -------- Global Marketing ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            BankingProgram.map((item, index) => {
                                return (
                                    <ProgramEach link={item.link} img={item.img} title={item.title} details={item.details} options={item.where} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
                {/* -------- Global Banking ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            OperationsProgram.map((item, index) => {
                                return (
                                    <ProgramEach link={item.link} img={item.img} title={item.title} details={item.details} options={item.where} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
                {/* -------- Others ------- */}
                <TabContainer className={classes.tabContainer} dir={theme.direction}>
                    <Box display="flex" justifyContent="space-around" flexWrap="wrap"  >
                        {
                            OtherPrograms.map((item, index) => {
                                return (
                                    <ProgramEach link={item.link} img={item.img} title={item.title} details={item.details} options={item.where} />
                                )
                            })
                        }
                    </Box>
                </TabContainer>
            </SwipeableViews>
        </div >
    );
}