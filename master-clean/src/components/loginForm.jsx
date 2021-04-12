import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Input from "./common/input";
import Joi from "joi-browser";

const useStyles = (theme) => ({
  row: {
    margin: "20px 0px 20px 0px",
  },
});

class LoginForm extends Component {
  state = {
      account: { email: "", password: "" },
      errors:{},
  };

  schema = {
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().min(10).max(16).label('Password')
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
    };


  handleSubmit = e => {
      e.preventDefault();

      const errors = this.validate();
      this.setState({ errors: errors || {} });
      if (errors) return;
   
    console.log("Submitted");
    };
    

  validateProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const schema = {[name]: this.schema[name]};
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors });
    };
     
    render() {
        const { account, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="email"
          value={account.email}
          label="Email"
          onChange={this.handleChange}
          error={errors.email}
          type="email"
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={this.handleChange}
          error={errors.password}
          type="password"
        />
        <Button type="submit" className="signupBtn-modal">
          Login
        </Button>
      </form>
    );
  }
}

export default withStyles(useStyles)(LoginForm);
