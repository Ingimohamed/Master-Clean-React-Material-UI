import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ordertshirt from '../images/order-tshirt.png';
import orderpullover from '../images/order-pullover.png';




const useStyles = makeStyles((theme) => ({
    accordion: {
    margin: "15px 0",
    borderRadius: "20px",
    boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
  },
  title: {
    fontWeight:"700",
    },
    AccordionBody: {
        padding: "30px!important",
    },
    p_title: {
        fontWeight: "700",
        fontSize: "17px",
        color: "#00527D",
        fontFamily:"'Poppins', sans-serif",
    },
    p: {
        fontWeight: "400",
        fontSize: "17px",
        color: "#00527D",
        fontFamily:"'Poppins', sans-serif",
    },
    delivery: {
        color: "#EFB6B6",
        fontSize: "17px",
        fontFamily:"'Poppins', sans-serif",
    },
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
        <AccordionDetails className={classes.AccordionBody}>
          <Grid container className="mb-1">
            <Grid item md={6}> 
            <img className="reviewImg" src={ordertshirt} alt="tshirt"/>
            </Grid>
            <Grid item md={6}>
                <Typography className={classes.p_title} variant="body2" component="p">T-shirt</Typography>
                 <Typography className={classes.p} variant="body2" component="p">D(dry-clean)</Typography>
                <Typography className={classes.p} variant="body2" component="p">Price: 20 EGP</Typography>
                <Typography className={classes.p} variant="body2" component="p">Quantity: 1</Typography>
            </Grid>
          </Grid>
          <Grid container className="mb-4">
            <Grid item md={6}> 
            <img className="reviewImg" src={orderpullover} alt="pullover"/>
            </Grid>
            <Grid item md={6}>
                <Typography className={classes.p_title} variant="body2" component="p">Pullover</Typography>
                 <Typography className={classes.p} variant="body2" component="p">D(dry-clean)</Typography>
                <Typography className={classes.p} variant="body2" component="p">Price: 30 EGP</Typography>
                <Typography className={classes.p} variant="body2" component="p">Quantity: 1</Typography>
            </Grid>
     </Grid>
    <Grid container>
        <Grid item md={6}>
         <Typography className={classes.p}>subtotal</Typography>   
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.p}>50 EGP</Typography> 
        </Grid>            
        </Grid>
    <Grid container>
        <Grid item md={6}>
           <Typography className={classes.delivery} variant="body2" component="p">Delivery</Typography> 
        </Grid>
        <Grid item md={6}>
          <Typography className={classes.delivery} variant="body2" component="p">10 EGP</Typography> 
        </Grid>            
    </Grid>
    <Divider className="divider" />
        <Grid container>
           <Grid item md={6}>
               <Typography className={classes.p}>TOTAL</Typography>
            </Grid>
           <Grid item md={6}>
               <Typography className={classes.p}>60 EGP</Typography>
            </Grid>
        </Grid>          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
