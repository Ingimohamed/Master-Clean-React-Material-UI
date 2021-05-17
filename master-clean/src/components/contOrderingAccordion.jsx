import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import SignInForm from './contOrderSignInForm';
import AddressForm from './contOrderAddressForm';
import PaymentForm from './contOrderPaymentForm';




const useStyles = makeStyles((theme) => ({
  paddOne: {
    paddingLeft: "0px!important",
    [theme.breakpoints.up('sm')]:{
      paddingLeft: "10px!important",
    }
  },
  paddTwo: {
    paddingRight: "0px!important",
    [theme.breakpoints.up('sm')]:{
      paddingRight: "10px!important",
    }
  },
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


export default function CustomizedAccordions() {




  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion className={classes.accordion} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className={classes.title}>1. SIGN IN</Typography>
        </AccordionSummary>
          <AccordionDetails>
              <SignInForm/>
          </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.title}>2. ADDRESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="addressTitle">New Shipping address</Typography>
            <AddressForm/>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}  square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.title}>3. PAYMENT</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <PaymentForm/>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}
