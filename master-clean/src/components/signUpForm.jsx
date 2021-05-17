import React from 'react';
import Grid from '@material-ui/core/Grid';
import Joi from "joi-browser";
import Form from './common/form';
import axios from 'axios';
  

class SignUpForm extends Form {
    state = {
        posts:[],
        data: { firstname:"",lastname:"",address:"",streetname:"",email: "", password: "",confirmpassword:"" },
        errors:{},
    };

    componentDidMount() {
        console.log('hello from signup page');
        const promise = axios.get('https://clean-master-backend.herokuapp.com/api/account/check_if_account_exists/?email=admin@admin.com');
        console.log(promise);
       
    }
    
  
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(10).max(16).label('Password'),
        confirmpassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }).label('Confirm Password'),
        firstname: Joi.string().required().label('First Name'),
        lastname: Joi.string().required().label('Last Name'),
        address: Joi.string().required().label('Address'),
        streetname: Joi.string().required().label('Street Name'),
    };
      
    doSubmit = () => {
      //call the server
      console.log("Submitted");
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container >
                    <Grid align="left" xs={12} md={6} >
                    {this.renderLabel('firstname', 'First Name', 'label')}
                       {this.renderInput('firstname', 'text','form-control')}
                    </Grid>
                    <Grid align="left" xs={12} md={6} >
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
                    <Grid align="left" xs={12} md={6} >
                      {this.renderLabel('password', 'Password', 'label')}
                      {this.renderInput('password','password','form-control')}
                    </Grid>
                    <Grid align="left" xs={12} md={6} >
                     {this.renderLabel('password', 'Confirm Password', 'label')}
                      {this.renderInput('confirmpassword','password','form-control')}
                    </Grid>
           </Grid>
                <Grid container>
                    <Grid xs={12}>
                    {this.renderLabel('address', 'Address', 'label')}
                    {this.renderInput('address','text','form-control')}
                </Grid>
           </Grid>                     
                <Grid container>
                    <Grid xs={12}>
                       {this.renderLabel('streetname', 'Street Name', 'label')}
                       {this.renderInput('streetname','text','form-control')}
                    </Grid>
              </Grid>
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