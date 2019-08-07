import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    img: {
        width: '60px',
        height: '60px',
        padding: '10px',
    },
    btn: {
        border: '1px solid grey',
    },
}));

export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const EVENTDATA = [
        {
            title: 'Come Get Hired',
            date: 'June 20, 2019',
            uni: '',
            img: require('../assets/scools/queens.png'),
            location: "ABE666",
            time: "5PM",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'July 10, 2019',
            uni: '',
            img: require('../assets/scools/ru.jpg'),
            location: "ABE666",
            time: "5PM",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'August 10, 2019',
            uni: '',
            img: require('../assets/scools/uoft.png'),
            time: "5PM",
            location: "ABE666",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'Sept 10, 2019',
            uni: '',
            img: require('../assets/scools/yorku.gif'),
            time: "5PM",
            location: "ABE666",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'Sept 10, 2019',
            uni: '',
            img: require('../assets/scools/uwo.jpg'),
            time: "5PM",
            location: "ABE666",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'Nov 13, 2019',
            uni: '',
            img: require('../assets/scools/uw.png'),
            time: "5PM",
            location: "ABE666",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        },
        {
            title: 'Come Get Hired',
            date: 'Dec 13, 2019',
            uni: '',
            img: require('../assets/scools/uOttawa.png'),
            time: "5PM",
            location: "ABE666",
            details1: 'Scotiabank is among the largest banks in the world – powered by nearly 90,000 high-performing (and awesome) teammates who make a real difference across the globe. Scotiabank is a leading provider of advice, products, digital experiences, and financial services in more than 50 countries.',
            details2: 'This is a place where you’ll get to learn and develop your skills, while being recognized for your hard work. Scotiabank is passionate about bringing their whole selves to work, creating inclusive work environments for everyone to enjoy.',
            details3: 'Meet their campus team to learn more about their opportunities and network with their engaging, insightful team members.'

        }
    ]


    return (
        <div className={classes.root}>
            {
                EVENTDATA.map((item, index) => {
                    return (
                        <ExpansionPanel expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <img className={classes.img} src={item.img}></img>
                                <Typography className={classes.secondaryHeading}>{item.date}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Box left display="flex" flexDirection="column">
                                    <Typography style={{ textAlign: "left", padding: "10px" }} variant="h3" component="h3" >
                                        {item.title}
                                    </Typography>

                                    <Box my={4} >
                                        <Typography align="left" variant="subtitle1" component="p"> {item.details1} </Typography>
                                        <Typography align="left" variant="subtitle1" component="p"> {item.details2} </Typography>
                                        <Typography align="left" variant="subtitle1" component="p"> {item.details3} </Typography>
                                    </Box>
                                    <Typography style={{ textAlign: "left", padding: "10px" }} variant="p" component="a">
                                        Location: {item.location}
                                    </Typography>
                                    <Typography style={{ textAlign: "left", padding: "10px" }} variant="p" component="a">
                                        Time: {item.time}
                                    </Typography>
                                    <Button className={classes.btn}> RSVP </Button>
                                </Box>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )

                })
            }
        </div>
    );
}