import React from 'react';
import Grid from '@material-ui/core/Grid';
import Joi from "joi-browser";
import Form from './common/form';

class SignInForm extends Form {
    state = {
        data: { email: "", password: "" },
        errors:{},
    };
  
    schema = {
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().min(10).max(16).label('Password'),
    };
      
    doSubmit = () => {
      //call the server
      console.log("Submitted");
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('email', 'Email', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('email', 'email', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={4}> 
                        {this.renderLabel('password', 'password', 'col-form-label')}
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderInput('password', 'password', 'input')}
                    </Grid>
                </Grid>
                <Grid container className="mb-1">
                    <Grid item xs={12}>
                        {this.renderButton("SIGN IN","signInBtn")}
                    </Grid>
                </Grid>
            </form>
         );
    }
}
 
export default SignInForm;