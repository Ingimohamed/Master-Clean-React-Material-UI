import React from "react";
import Joi from "joi-browser";
import Form from './common/form';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";


const useStyles = (theme) => ({
  "label": {
    color:"#00527D!important",
    fontWeight: "bold!important",
    margin: "18px 16px 7px 16px!important",
  },
});


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
          <Grid align="left" xs={12}>
              {this.renderLabel('email', 'Email', 'label')}
              {this.renderInput('email','email','form-control')} 
            </Grid>
          <Grid align="left" xs={12}>
            {this.renderLabel('password', 'Password', 'label')}
            {this.renderInput('password','password','form-control')}
            </Grid>
        </Grid>
        <Grid container alignItems="center" className="buttonMtMb">
            <Grid item className="centered">
            {this.renderButton("Login","signupBtn-modal")}
            </Grid>
         </Grid>
      </form>
    );
  }
}

export default withStyles(useStyles) (LoginForm);
