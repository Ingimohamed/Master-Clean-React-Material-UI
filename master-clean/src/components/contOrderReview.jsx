import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: "15px 0",
    borderRadius: "20px",
    boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
  },
  title: {
    fontWeight:"700",
  },
  AccorBody:{},
}));
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
     
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#C2E5F1',
    color: "#00527D",
    borderRadius:"20px",
    borderBottom: '0px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      borderTopRightRadius: "20px",
      borderTopLeftRadius: "20px",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius:"0px",
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
 
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display:"grid!important",
  },
}))(MuiAccordionDetails);

export default function ContOrderReview() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion className={classes.accordion} square expanded>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className={classes.title}>REVIEW YOUR ORDER</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container className="mb-1">
            <Grid item md={6}> 
              image
            </Grid>
            <Grid item md={6}>
              tshirt
            </Grid>
          </Grid>
          <Grid container className="mb-1">
            <Grid item md={6}> 
              image
            </Grid>
            <Grid item md={6}>
               pullover
            </Grid>
     </Grid>
    <Grid container className="mb-1">
        <Grid item md={6}>
            subtotal
        </Grid>
        <Grid item md={6}>
           50 EGP
        </Grid>            
        </Grid>
    <Grid container className="mb-1">
        <Grid item md={6}>
            subtotal
        </Grid>
        <Grid item md={6}>
           50 EGP
        </Grid>            
    </Grid>
    <Divider />
        <Grid container>
           <Grid item md={6}>TOTAL</Grid>
           <Grid item md={6}>60 EGP</Grid>
        </Grid>          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
