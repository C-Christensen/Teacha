import React, { useState } from 'react';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from '@material-ui/core/CardActionArea';

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';

import Box from '@material-ui/core/Box';

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import GradCap from '../../assets/svg/gradcap.svg';
// import BioSVG from '../../assets/svg/bio.svg';
// import Experience from '../../assets/svg/experience.svg';

import EditableTextArea from '../../components/edit/editable-text-area.component';

import Toggle from "../../components/toggleSwitch/toggleSwitch";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 500,
            minWidth: 375,
            marginBottom: 400,
        },
        cardHeader: {
            display: 'flex',
            flexDirection: "column",
            height: 150,
            fontWeight: "bold",
            margin: "30px",
        },
        subHeader: {
            color: "#939498",
            fontWeight: "bold",
        },
        accordion: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        accordionStyling: {
            display: 'flex',
            flexDirection: 'row',
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: "rotate(180deg)"
        },
        avatar: {
            width: '100px',
            height: '100px'
        },
        bioIcon: {
            marginRight: "10px",
            width: "50px",
            height: "50px"
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightBold,
        },
        text: {
            textAlign: 'left',
        }
    }),
);

const Bio = () => {

    const [userInfo] = useState({
        bio: 'Hey everyone, I am a newly hired teacher for Ballard High School in Seattle area! I teach Algebra II and Biology for 10th and 11th grade. I hope to meet so many new teachers and I am so excited to explore all the group mentoring circles this platform has to offer!',
        education: 'I graduated from Volcano Vista High back in 2010 and pursued a Bachelor of Arts in Education at the University of New Mexico (Go Lobos!). I am also certified in early childhood education. I moved to Seattle a year ago.',
        experience: 'Before starting to work at Ballard High School, I taught both biology and earth sciences at Rio Grande Middle School in Albuquerque, New Mexico for 2 years. I was also a teacher’s assistant and Valley High for 1 year teaching Algebra I and Geometry.'
    })

    const classes = useStyles();
    return (
        <Box ml={5} mr={5} mt={5}>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <Avatar src={require("../../img/teacher.jpeg")} className={classes.avatar} />
                    }
                    title={
                        <Typography variant="h5">
                            Alejandro Romo
                        </Typography>
                    }
                    subheader={
                        <Typography className={classes.subHeader}>
                            Teacher at Ballard High School
                        </Typography>
                    }
                />

                <EditableTextArea
                    title="Bio"
                    text={userInfo.bio}
                    icon="bio" />

                <EditableTextArea
                    title="Education"
                    text={userInfo.education}
                    icon="education" />

                <EditableTextArea
                    title="Experience"
                    text={userInfo.experience}
                    icon="experience" />

                <CardActionArea>
                    <Toggle name="Looking For a Mentor" toggled={true} />
                    <Toggle name="Open to Being a Mentor" toggled={false} />
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default Bio;