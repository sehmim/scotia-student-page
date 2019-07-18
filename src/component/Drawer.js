import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../styles/landing-page.sass'


const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const navBarDetailsMain = [
    { text: 'Why Scotia', href: '#why-scotia' },
    { text: 'Meet The Team', href: '#meet-the-team' },
    { text: 'Events', href: '#events' }
]
const navBarDetailsSecondary = [
    { text: 'Programs', href: '#programs' },
    { text: 'FAQ', href: '#faq' },
]
function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>

                <Grid container justify="center" alignItems="center">
                    <AnchorLink href='#home'>
                        <img src="data:image/png;base64,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"
                            style={{ width: '100px', margin: '30px' }}
                            className="nav-img"
                        ></img>
                    </AnchorLink>
                </Grid>


                {navBarDetailsMain.map((item, index) => (
                    <AnchorLink offset='130' key={index} style={{ textDecoration: 'none', color: 'black' }} href={item.href} >
                        <ListItem className="nav-item" button component="a" href={item.href}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </AnchorLink>
                ))}
            </List>
            <Divider />
            <List>
                {navBarDetailsSecondary.map((item, index) => (
                    <AnchorLink offset='130' key={index} style={{ textDecoration: 'none', color: 'black' }} href={item.href} >
                        <ListItem button key={item.text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </AnchorLink>
                ))}
            </List>
        </div >
    );


    return (
        <div>
            <Button onClick={toggleDrawer('right', true)}>
                <MenuIcon />
            </Button>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;
