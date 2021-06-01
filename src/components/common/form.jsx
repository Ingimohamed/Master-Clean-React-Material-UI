import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from './input';
import Label from './label';
import Button from "@material-ui/core/Button";
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  
  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #00517F',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);



class Form extends Component {
    state = {
        data: {},
        errors: {},
    };
    
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details)
          errors[item.path[0]] = item.message;
        return errors;
    };
    
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = {[name]: this.schema[name]};
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };
    
    
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
  if (errors) return;
  
  this.doSubmit();
    };
    
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderButton(label, className) {
        return  <Button disabled={this.validate()}  type="submit" className={className}>
        {label}
      </Button>
    };
    
    renderLabel(name, label,className) {
      return (<Label
          name={name}
          label={label}
          className={className}
      />);
 }
    renderInput(name, type="text", className) {
        const { data, errors } = this.state;
        return (<Input
            name={name}
            value={data[name]}
            onChange={this.handleChange}
            error={errors[name]}
          type={type}
          className={className}
        />);
  }
  
  renderSelect(name, className, value) {
    const { data, errors } = this.state;
    return (
      <NativeSelect
      id={name}
      value={value}
      onChange={this.handleChange4}
      error={errors[name]}
      input={<BootstrapInput />}
      className={className}
      />
    );
  }
}
 
export default Form;