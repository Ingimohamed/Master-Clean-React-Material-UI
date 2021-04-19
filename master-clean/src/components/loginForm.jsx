import React from "react";
import Joi from "joi-browser";
import Form from './common/form';
import Grid from '@material-ui/core/Grid';

// weslt le 16- Disabling the Submit Button fe section el forms


class LoginForm extends Form {
  state = {
      data: { email: "", password: "" },
      errors:{},
  };

  schema = {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().min(10).max(16).label('Password')
  };
    
  doSubmit = () => {
    //call the server
    console.log("Submitted");
  }
     
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
            <Grid xs={12}>
              {this.renderInput('email', 'Email', 'email')}
            </Grid>
            <Grid xs={12}>
            {this.renderInput('password','Password','password')}
            </Grid>
        </Grid>
        <Grid container alignItems="center" className="buttonMtMb">
            <Grid item className="centered">
            {this.renderButton("Login")}
            </Grid>
         </Grid>
      </form>
    );
  }
}

export default LoginForm;
