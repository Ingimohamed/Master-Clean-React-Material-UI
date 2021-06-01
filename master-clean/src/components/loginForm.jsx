import React from "react";
import Joi from "joi-browser";
import Form from './common/form';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import { login } from '../services/authService';


const useStyles = (theme) => ({
  "label": {
    color:"#00527D!important",
    fontWeight: "bold!important",
    margin: "18px 16px 7px 16px!important",
  },
});


class LoginForm extends Form {
  state = {
      data: { email_or_username: "", password: "" },
      errors:{}, 
  };

  schema = {
    email_or_username: Joi.string().required().label('Email'),
    password: Joi.string().required().min(3).max(16).label('Password')
  };
    
  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email_or_username, data.password);
      console.log(jwt.token);
      localStorage.setItem("token", jwt.token);
      sessionStorage.setItem("token", jwt.token);
      this.props.history.push("/");//el mafrod tero7 lel home ba3d el login bas msh sha8ala !!!
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email_or_username = ex.response.data;
        this.setState({ errors });
      }
    }
   
  }
     
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid align="left" xs={12}>
              {this.renderLabel('email_or_username', 'Email', 'label')}
              {this.renderInput('email_or_username','text','form-control')} 
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
