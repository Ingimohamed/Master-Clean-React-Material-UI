import React from 'react';
import Grid from '@material-ui/core/Grid';
import Joi from "joi-browser";
import Form from './common/form';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import closeModal from '../images/closeModal.png';
import Typography from '@material-ui/core/Typography';
import GoogleMap from './Googlemap';

const useStyles = (theme) => ({
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
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: '4rem',
    boxShadow: theme.shadows[5],
    padding: "23px",
    // maxHeight: "calc(100vh - 3.5rem)",
    maxHeight: "204vh",
    overflow: "hidden",
    width: "700px",
    margin: "1.75rem auto !important",
    position: "relative",
    top: "330px",
    [theme.breakpoints.up('sm')]: {
      top: "237px",
      width: "700px",
      maxHeight: "182vh",
      padding: "32px",
    },
    [theme.breakpoints.up('md')]: {
      top: "234px",
      width: "700px",
      maxHeight: "181vh",
      padding: "32px",
    },
    [theme.breakpoints.up('lg')]: {
      top: "223px",
      width: "700px",
      maxHeight: "169vh",
      padding: "32px",
    },
    [theme.breakpoints.up('xl')]: {
      top: "0px",
      width: "700px",
      maxHeight: "169vh",
      padding: "32px",
    },
  },
  modalHeader: {
    borderBottom: "none",
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    padding: "0px 11px",
    display:"flex",
  },
  modalTitle: {
    fontWeight: "500",
    color: "#00527D",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.5",
    fontSize: "1.25rem",
    margin: "0px 0px 22px 0px",
  },
  formControl: {
    border: "1px solid #BFE5F4",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "500px",
    height: "calc(1.5em + .5rem + 2px)",
    padding: ".25rem .5rem",
    lineHeight: "1.5",
    display: "block",
    color: "#495057",
    backgroundColor: "white",
    backgroundClip: "padding-box",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    overflow: "visible",
    margin: "9px 0px 12px 0px",
    
  },
  modalFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "1rem",
    
  },
  btn: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C2E5F1",
    padding: "6px 12px",
    backgroundColor: "white",
    color: "#00527D",
    fontSize: "20px",
    fontWeight:"700",
    borderRadius: "14px",
    outline: "none",
    textTransform: "none",
    margin: ".375rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "1.5",
    width: "98%",
    float:"left",
    [theme.breakpoints.up('sm')]:{
      fontSize: "20px",
      padding: "6px 25px",
    },
  },
  btn2: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C2E5F1",
    padding: "6px 12px",
    backgroundColor: "white",
    color: "#00527D",
    fontSize: "17px",
    fontWeight:"700",
    borderRadius: "14px",
    outline: "none",
    textTransform: "none",
    margin: ".375rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "1.5",
    width: "98%",
    float:"right",
    [theme.breakpoints.up('sm')]:{
      fontSize: "20px",
      padding: "6px 25px",
    },
  },
  btn3: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C2E5F1",
    padding: "6px 25px",
    backgroundColor: "white",
    color: "#00527D",
    fontSize: "20px",
    fontWeight:"700",
    borderRadius: "14px",
    outline: "none",
    textTransform: "none",
    margin: ".375rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "1.5",
    width: "98%",
    float:"right",
  },
  btn4: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C2E5F1",
    padding: "6px 25px",
    backgroundColor: "white",
    color: "#00527D",
    fontSize: "20px",
    fontWeight:"700",
    borderRadius: "14px",
    outline: "none",
    textTransform: "none",
    margin: ".375rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "1.5",
    width: "98%",
    float:"right",
  },
  padRight: {
    paddingRight:"13px",
    [theme.breakpoints.up('sm')]:{
      paddingLeft:"13px",
    },
  },
  padLeft:{
    paddingLeft:"13px",
    [theme.breakpoints.up('sm')]:{
       paddingLeft:"13px",
    },
  },
  padForm: {
    padding:"0px 20px",
  },
  spanOfCloseIcon: {
    marginLeft:"auto",
  },
  closeModelBtn: {
    width: "97%",
    outline:"none",
  },
  padding: { 
    padding:"10px 0px",
  },
  ".label": {
    display: "none!important",
  },
});

class AddNewAddressForm extends Form {
  state = {
    data: { fullname:"",contactnumber:"",city:"",address:"",housenumber:"", streetname:"" },
    errors:{},
  };

  schema = {
    fullname: Joi.string().required().label('Full Name'),
    contactnumber: Joi.number().required().label('Contact Number'),
    city:Joi.string().required().label('City'),
    address: Joi.string().required().label('Address'),
    housenumber:Joi.string().required().label('House Number'),
    streetname: Joi.string().required().label('Street Name'),
};

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  }

  render() {
    const { classes } = this.props;
    return (
   
      <div  className={classes.paper}>
        <div className={classes.modalContent}>
            <div className={classes.modalHeader}>
            <Typography className="addressTitle">New Shipping address</Typography>
            <span aria-hidden="true" className={classes.spanOfCloseIcon}>
                  <img className={classes.closeModelBtn} src={closeModal} alt="close"/>
              </span>
            </div> 
          <div className="modal-body margin-body">
            <form>
              <Grid container className="mb-3">
                <Grid item xs={12}>
                  <GoogleMap />
                </Grid>
              </Grid>
    
              <Grid container className={classes.padding}>
              <Grid item xs={6} className={classes.padRight}>
                  <Button className={classes.btn3}>Home</Button>
              </Grid>
              <Grid item xs={6} className={classes.padLeft}>
                  <Button  className={classes.btn4}>Work</Button>
              </Grid>
              </Grid>
              
              <Grid container className="mb-1">
                <Grid item xs={4}> 
                   <label className="col-form-label" htmlFor="fullname">Full Name*</label>
                </Grid>
                <Grid item xs={8}>
                   {this.renderInput('fullname','','input')}
                </Grid>
              </Grid>
    
              <Grid container className="mb-1">
                <Grid item xs={4}> 
                   <label className="col-form-label" htmlFor="contactnumber">Contact Number*</label>
                </Grid>
                <Grid item xs={8}>
                  {this.renderInput('contactnumber','number','input')}
                </Grid>
              </Grid>
    
              <Grid container className="mb-1">
                <Grid item xs={4}> 
                   <label className="col-form-label" htmlFor="city">city*</label>
                </Grid>
                <Grid item xs={8}>
                  {this.renderInput('city','','input')}
                </Grid>
              </Grid>
    
              <Grid container className="mb-1">
                <Grid item xs={4}> 
                   <label className="col-form-label" htmlFor="address">Address*</label>
                </Grid>
                <Grid item xs={8}>
                   {this.renderInput('address','','input')}
                </Grid>
              </Grid>
    
              <Grid container className="mb-1 direction">
                <Grid item xl={4} lg={4} sm={4} xs={12} className={classes.paddOne}> 
                  <label className="col-form-label textAlignLeft" htmlFor="streetname">Street Name/Number*</label>
                    {this.renderInput('streetname','','input')}
                </Grid>
                <Grid item sm={4} xs={12} className={classes.paddTwo}>
                <label className="col-form-label textAlignLeft" htmlFor="housenumber">House Number*</label>
                  {this.renderInput('housenumber','','input')}
                </Grid>
                <Grid item sm={4} xs={0}></Grid>
              </Grid>
            
            <Grid container>
              <Grid item xs={6}>
                  <Button type="button" className={classes.btn} data-dismiss="modal">Cancel</Button>
              </Grid>
              <Grid item xs={6}>
                  {this.renderButton("Add new address","addNewAddressBtn")}
              </Grid>
            </Grid>
            </form>
            </div>
        </div>
      </div>
      );
  }
}
export default withStyles(useStyles)(AddNewAddressForm);
