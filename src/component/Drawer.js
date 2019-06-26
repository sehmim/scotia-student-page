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
    { text: 'Item 2', href: '#' },
    { text: 'Item 3', href: '#' }
]
const navBarDetailsSecondary = [
    'Other', 'Stuff'
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
                    <AnchorLink href='#'>
                        <img src="https://www.cmrinsurance.com/wp-content/uploads/2018/02/transparent-scotia.png"
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
                {navBarDetailsSecondary.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
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
