import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GradCap from '../../assets/svg/gradcap.svg';
import BioSVG from '../../assets/svg/bio.svg';
import Experience from '../../assets/svg/experience.svg';

import Box from '@material-ui/core/Box';

import Typography from "@material-ui/core/Typography";

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

interface EditableTextAreaProps {
    title: string,
    text: string,
    icon: string
}

const useStyles = makeStyles((theme) => ({
    root: {
       flexBasis: "end", 
    },
    editBtn: {
        marginLeft: "0px",
        marginRight: "0px",
        paddingRight: '0px',
        paddingLeft: '0px',
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
}));

const EditableTextArea = (props: EditableTextAreaProps) => {
    const classes = useStyles();
    
    const [value, setValue] = React.useState(props.text);
    const [open, setOpen] = React.useState(false);
    let tempValue = '';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (save: boolean) => {
        if (save) {
            setValue(tempValue);
        }
        setOpen(false);
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      tempValue = (event.target.value);
    };

    let icon = BioSVG;
    switch (props.icon) {
        case "bio":
            icon = BioSVG
            break;
        case "education":
            icon = GradCap
            break;
        case "experience":
            icon = Experience
            break;
        default: 
            break;
    }


    return (
       <div>
           <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box className={classes.accordion}>
                        <img src={icon} className={classes.bioIcon} alt={props.icon} />
                        <Typography className={classes.heading}>{props.title}</Typography>
                    </Box>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography className={classes.text}>
                       {value}
                    </Typography>

                    <Box>
                        <Button className={classes.editBtn} color="primary" onClick={handleClickOpen}>
                            <EditTwoToneIcon/>
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Click on the text and edit to change your {props.title}. Afterwards, click on the
                                    Save button to save your changes or Cancel to discard them.
                                </DialogContentText>
                                <TextField
                                    multiline
                                    rows={5}
                                    defaultValue = {value}
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleChange}
                                />
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={ ()=> handleClose(false)} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={() => handleClose(true)} color="primary">
                                    Save
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Box>

                </AccordionDetails>
            </Accordion>
       </div>
    )
}

export default EditableTextArea;