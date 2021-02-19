import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GoogleMap from './Googlemap';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ccv from '../images/ccv.png';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #00517F',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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

  const [year, setYear] = React.useState('');
  const handleChange3 = (event) => {
    setYear(event.target.value);
  };

  const [month, setMonth] = React.useState('');
  const handleChange4 = (event) => {
    setMonth(event.target.value);
  };
  


  const [value, setValue] = React.useState('credit');

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

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
          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Email*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="email"/>
            </Grid>
          </Grid>
          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Password*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="password"/>
            </Grid>
     </Grid>
    <Grid container className="mb-1">
        <Grid item md={10}>
            <Button className="signInBtn">SIGN IN</Button>
        </Grid>
    </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion} square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.title}>2. ADDRESS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="addressTitle">New Shipping address</Typography>
          <Grid container className="mb-3">
            <Grid item md={12}>
              <GoogleMap />
            </Grid>
          </Grid>

          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Full Name*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="text"/>
            </Grid>
          </Grid>

          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Contact Number*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="number"/>
            </Grid>
          </Grid>

          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">city*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="text"/>
            </Grid>
          </Grid>

          <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Address*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="text"/>
            </Grid>
          </Grid>

          <Grid container className="mb-1 direction">
            <Grid item xl={4} lg={4} md={5} className="paddOne"> 
              <label className="col-form-label textAlignLeft" htmlFor="">Street Name/Number*</label>
              <input className="input" type="text"/>
            </Grid>
            <Grid item md={4} className="paddTwo">
            <label className="col-form-label textAlignLeft" htmlFor="">House Number*</label>
               <input className="input" type="text"/>
            </Grid>
          </Grid>

          <Grid container className="mb-1">
        <Grid item md={10}>
            <Button className="signInBtn">Proceed to checkout</Button>
        </Grid>
       </Grid>
          
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}  square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.title}>3. PAYMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormControl component="fieldset">
           
              <RadioGroup aria-label="payment" name="payment1" value={value} onChange={handleChange2}>
              <FormControlLabel value="credit" control={<Radio />} label="Credit/Debit card payment (We accept Visa and mastercard)" />
              
              <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Card number*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="number"/>
            </Grid>
              </Grid>
              <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Name on card*</label>
            </Grid>
            <Grid item md={8}>
               <input className="input" type="text"/>
            </Grid>
              </Grid>
              <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">Expiration Date*</label>
            </Grid>
            <Grid item md={4}>
               
      <FormControl className="selectFormControl pr">
        <NativeSelect
          id="demo-customized-select-native"
          value={month}
          onChange={handleChange4}
          input={<BootstrapInput />}
          className="NativeSelect"
        >
          <option selected value={10}>- Choose months -</option>
          <option value={20}>January</option>
          <option value={30}>February</option>
          <option value={40}>March</option>
          <option value={50}>April</option>
          <option value={60}>May</option>
          <option value={70}>June</option>
          <option value={80}>July</option>
          <option value={90}>August</option>
          <option value={100}>September</option>
          <option value={110}>October</option>
          <option value={120}>November</option>
          <option value={130}>December</option>
        </NativeSelect>
                  </FormControl>
                  
                </Grid>
     <Grid item md={4}>
                  <FormControl className="selectFormControl pl">
        <NativeSelect
          id="demo-customized-select-native"
          value={year}
          onChange={handleChange3}
          input={<BootstrapInput />}
          className="NativeSelect"
        >
          <option selected value={10}>- Choose Year -</option>
          <option value={20}>2010</option>
          <option value={30}>2011</option>
          <option value={40}>2012</option>
          <option value={50}>2013</option>
          <option value={60}>2014</option>
          <option value={70}>2015</option>
        </NativeSelect>
                  </FormControl>
                  
            </Grid>
              </Grid>
              <Grid container className="mb-1">
            <Grid item md={4}> 
               <label className="col-form-label" htmlFor="">CCV*</label>
            </Grid>
            <Grid item md={4}>
               <input className="input" type="text"/>
                </Grid>
              <Grid item md={4}>
              <img className="ccvImg" src={ccv} alt="credit card"/>
            </Grid>
              </Grid>          
              <FormControlLabel value="cash" control={<Radio />} label="Cash on delivery" />
              
              <Grid container>
                <Grid item md={6} xs={12}>
                  <div className="custom-file">
                      <input type="file" className="custom-file-input" id="customFileLangHTML"/>
                      <label className="custom-file-label" htmlFor="customFileLangHTML" data-browse="VALIDATE">Enter coupon code here</label>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button className="paynowBtn">Pay now</Button>
                </Grid>
                </Grid>
              </RadioGroup>
        </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
