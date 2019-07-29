import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// assets
import backImage from '../assets/back.svg';

import logo from "../assets/sidebar-logo.png";

class AppBarContainer extends Component {

    render() {
        const { classes } = this.props;
        return (

            <div>
                <div className={classes.hero}>
                    <div className={classes.container}>
                        <Typography variant="h2" color="inherit" className={classes.title}>
                            Scotia Student Hub
                        </Typography>
                    </div>
                </div>
                <img className={classes.logo} src={logo}></img>
            </div>
        )
    }
}


const styles = {
    logo: {
        position: 'relative',
        bottom: '280px',
        display: 'none',
        ['@media (max-width:700px)']: {
            display: 'inline',
        }
    },
    hero: {
        marginTop: '80px',
        marginRight: '90px',
        height: '100vh',
        background: `url(${backImage}) no-repeat`,
        ['@media (min-width:700px)']: {
            marginRight: '100px',
        }
    },
    container: {
        display: 'flex',
        padding: `200px 0px 0px 0px`,
        flexDirection: 'column',
        width: '320px',
        alignItems: 'center',
        ['@media (min-width:770px)']: {
            padding: `100px 100px 0px 0px`,
        },
    },
    title: {
        ['@media (min-width:1440px)']: {
            padding: '300px 50px 300px 300px',
            fontSize: '80px',
        },
        padding: '10px 0px 0px 0px',
        textTransform: 'uppercase',
        fontWeight: '100',
        ['@media (min-width:770px)']: {
        },
    },
    p: {
        marginTop: '10px',
        display: 'flex',
        width: '200px'
    },
    button: {
        marginTop: '10px',
        left: '100px',
        textTransform: 'none',
        background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`
    }
};

export default withStyles(styles)(AppBarContainer);