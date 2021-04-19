import React from 'react';
import Grid from '@material-ui/core/Grid';
import Joi from "joi-browser";
import Form from './common/form';
  

class SignUp extends Form {
    state = {
        data: { firstname:"",lastname:"",address:"",streetname:"",email: "", password: "",confirmpassword:"" },
        errors:{},
    };
  
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(10).max(16).label('Password'),
        confirmpassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }).label('Confirm Password'),
        firstname: Joi.string().label('First Name'),
        lastname: Joi.string().label('Last Name'),
        address: Joi.string().label('Address'),
        streetname: Joi.string().label('Street Name'),
    };
      
    doSubmit = () => {
      //call the server
      console.log("Submitted");
    }
    render() { 
        return (
            <form>
                <Grid container >
                    <Grid xs={12} md={6} >
                       {this.renderInput('firstname', 'First Name')}
                    </Grid>
                    <Grid xs={12} md={6} >
                      {this.renderInput('lastname', 'Last Name')}
                    </Grid> 
               </Grid>
                <Grid container>
                    <Grid xs={12}>
                       {this.renderInput('email', 'Email','email')}
                    </Grid>
           </Grid>      
                <Grid container>
                    <Grid xs={12} md={6} >
                      {this.renderInput('password','Password','password')}
                    </Grid>
                    <Grid xs={12} md={6} >
                      {this.renderInput('confirmpassword','Confirm Password','password')}
                    </Grid>
           </Grid>
                <Grid container>
                 <Grid xs={12}>
                    {this.renderInput('address', 'Address')}
                </Grid>
           </Grid>                     
                <Grid container>
                    <Grid xs={12}>
                       {this.renderInput('streetname', 'Street Name')}
                    </Grid>
              </Grid>
                <Grid container alignItems="center" className="buttonMtMb">
                    <Grid item className="centered">
                        {this.renderButton("Sign up")}
                    </Grid>
                </Grid>
            </form>
         );
    }
}
 
export default  SignUp;