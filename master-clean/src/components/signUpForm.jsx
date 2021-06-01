import React from 'react';
import Grid from '@material-ui/core/Grid';
import Joi from "joi-browser";
import Form from './common/form';
import axios from 'axios';
import * as userService from './../services/userService';

class SignUpForm extends Form {
    state = {
        items:[],
        data: { firstname:"",lastname:"",email: "", password: "",confirmpassword:"" },
        errors:{},
    };

  
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(3).max(16).label('Password'),
        confirmpassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }).label('Confirm Password'),
        firstname: Joi.string().required().label('First Name'),
        lastname: Joi.string().required().label('Last Name'),
    };
      
    doSubmit = async () => {
        try {
            const response = await userService.register(this.state.data);
            console.log(response);
            localStorage.setItem("token", response.headers["x-auth-token"]);
            this.props.history.push("/");
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }
    };
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container >
                    <Grid className="signup_firstname" align="left" xs={12} md={6} >
                    {this.renderLabel('firstname', 'First Name', 'label')}
                       {this.renderInput('firstname', 'text','form-control')}
                    </Grid>
                    <Grid className="signup_lastname" align="left" xs={12} md={6} >
                    {this.renderLabel('lastname', 'Last Name', 'label')}
                      {this.renderInput('lastname', 'text','form-control')}
                    </Grid> 
               </Grid>
                <Grid container>
                    <Grid align="left" xs={12}>
                       {this.renderLabel('email', 'Email', 'label')}
                       {this.renderInput('email', 'text','form-control')}
                    </Grid>
           </Grid>      
                <Grid container>
                    <Grid className="signup_password" align="left" xs={12} md={6} >
                      {this.renderLabel('password', 'Password', 'label')}
                      {this.renderInput('password','password','form-control')}
                    </Grid>
                    <Grid className="signup_confpassword" align="left" xs={12} md={6} >
                     {this.renderLabel('password', 'Confirm Password', 'label')}
                      {this.renderInput('confirmpassword','password','form-control')}
                    </Grid>
           </Grid>
                {/* <Grid container>
                    <Grid align="left" xs={12}>
                    {this.renderLabel('address', 'Address', 'label')}
                    {this.renderInput('address','text','form-control')}
                </Grid>
           </Grid>                      */}
                {/* <Grid container>
                    <Grid align="left" xs={12}>
                       {this.renderLabel('streetname', 'Street Name', 'label')}
                       {this.renderInput('streetname','text','form-control')}
                    </Grid>
              </Grid> */}
                <Grid container alignItems="center" className="buttonMtMb">
                    <Grid item className="centered">
                        {this.renderButton("Sign up","signupBtn-modal")}
                    </Grid>
                </Grid>
            </form>
         );
    }
}
 
export default  SignUpForm;