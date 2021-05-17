import React from 'react';
import GoogleMap from './Googlemap';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Joi from "joi-browser";
import Form from './common/form';


const useStyles = (theme) => ({});

class AddressForm extends Form {
    state = {
        data: { fullname: "", contactnumber: "", city:"", address:"",housenumber:"", streetname:"" },
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
            <form onSubmit={this.handleSubmit}>
                <Grid container className="mb-3">
                    <Grid item xs={12}>
                        <GoogleMap />
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('fullname', 'Full Name*', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('fullname', 'text', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('contactnumber', 'Contact Number*', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('contactnumber', 'text', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('city', 'City*', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('city', 'text', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('address', 'Address*', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('address', 'text', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1 direction">
                    <Grid item xl={4} lg={4} sm={4} xs={12} className={classes.paddOne}> 
                        {this.renderLabel('streetname', 'Street Name/Number*', 'col-form-label textAlignLeft')}
                        {this.renderInput('streetname', 'text', 'input')}
                    </Grid>
                    <Grid item sm={4} xs={12} className={classes.paddTwo}>
                        {this.renderLabel('housenumber', 'House Number*', 'col-form-label textAlignLeft')}
                        {this.renderInput('housenumber', 'text', 'input')}
                    </Grid>
                    <Grid item sm={4} xs={0}></Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item sm={12} xs={12}>
                        {this.renderButton("Proceed to checkout","signInBtn")}
                    </Grid>
                </Grid>
            </form>
         );
    }
}
 
export default withStyles(useStyles) (AddressForm);