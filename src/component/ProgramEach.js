import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { fontSize, minWidth } from '@material-ui/system';
import { parse } from 'path';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles(theme => ({
    card: {
        margin: '25px 0px 25px 0px',
        minWidth: 355,
        maxWidth: 355
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    poop: {
        backgroundColor: 'red'
    },
    btn: {
        border: '1px solid grey',
        fontSize: '10px',
        margin: '5px'
    },
    btn2: {
        position: 'relative',
        bottom: '0px'
    },
    title: {
        height: '40px',
        margin: '0px 0px 10px 0px',
        fontSize: '25px'
    }
}));

export default function ProgramEach(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.img}
            />
            <CardContent>
                <Typography className={classes.title} variant="h4" component="p">{props.title}</Typography>
                <Box>
                    {
                        props.options.map((item, index) => {
                            return (<Button className={classes.btn}> {item} </Button>)
                        })
                    }
                </Box>
                <Typography style={{ height: '170px' }} >
                    {props.details}
                </Typography>
                <BottomNavigation>
                    <Button
                        variant="outlined" href={props.link}
                        className={classes.btn2} fullWidth > Learn More </Button>
                </BottomNavigation>
            </CardContent>
        </Card>
    );
}
