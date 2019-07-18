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
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 305,
        margin: '25px'
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
            {console.log(props)}
            <CardMedia
                className={classes.media}
                image="https://pixel.nymag.com/imgs/daily/vulture/2018/11/27/27-spongebob-squarepants.w700.h700.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="h4" component="p">{ props.title }</Typography>
                <Box>
                    <Button className={classes.btn}> Undergrad </Button>
                    <Button className={classes.btn}> Banking </Button>
                    <Button className={classes.btn}> Technology </Button>
                </Box>
                <Typography c>
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
            >
                <CardActions >
                    <ExpandMoreIcon />
                </CardActions>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                    <a>
                        APPLY NOW
                    </a>
                </CardContent>
            </Collapse>
        </Card>
    );
}
