import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { fontFamily } from '@material-ui/system';
import TemporaryDrawer from './Drawer';

const LOGO_URL = "https://i.imgur.com/P4xrlog.png"

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: 'white'

    },
    paper: {
        backgroundColor: 'red',
        height: '6px'
    },
    logo: {
        maxWidth: '340px',
        width: '70%',
        maxHeight: '50%',
    },
    navItems: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navItemsEach: {
        textTransform: 'capitalize',
        fontSize: '20px',
        letterSpacing: '2.4px'
    },

});

export default function SimpleAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="white" >
                <Grid container direction="row" justify="space-between" >
                    <img className={classes.logo} src={LOGO_URL} ></img>
                    {
                        // window.screen.width <= 796 ?
                        <Box alignContent="center" className={classes.navItems}   >
                            <TemporaryDrawer />
                        </Box>
                        // :
                        // <Box p={1} className={classes.navItems} justify="center" direction="row">
                        //     {console.log('big')}

                        //     <Button className={classes.navItemsEach} size="large" color="inherit">Topic 1</Button>
                        //     <Button className={classes.navItemsEach} size="large" color="inherit">Topic 2</Button>
                        //     <Button className={classes.navItemsEach} size="large" color="inherit">Topic 3</Button>
                        // </Box>
                    }
                </Grid>
                {/* <Grid>
                    <Paper className={classes.paper}></Paper>
                </Grid> */}
            </AppBar>
        </div>
    );
}