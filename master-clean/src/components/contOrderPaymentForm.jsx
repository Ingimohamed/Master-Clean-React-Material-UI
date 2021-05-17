import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import ccv from '../images/ccv.png';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Joi from "joi-browser";
import Form from './common/form';



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
  


class PaymentForm extends Form {
  state = {
    data: { cardnumber: "", nameoncard: "", ccv: "" },
    errors: {},
    radioButton: { value: "", year: "", month: "" },
    months: [
      { id: "3", name: "January" },
      { id: "4", name: "February" },
      { id: "5", name: "March" },
      { id: "6", name: "April" },
      { id: "7", name: "May" },
      { id: "8", name: "June" },
      { id: "9", name: "July" },
      { id: "10", name: "August" },
      { id: "11", name: "September" },
      { id: "12", name: "October" },
      { id: "13", name: "November" },
      { id: "14", name: "December" },
      ],
    
      years: [
        { id: "3", name: "2024" },
        { id: "4", name: "2023" },
        { id: "5", name: "2022" },
        { id: "6", name: "2021" },
        { id: "7", name: "2020" },
        { id: "8", name: "2025" },
        { id: "9", name: "2026" },
        { id: "10", name: "2027" },
        { id: "11", name: "2028" },
        { id: "12", name: "2029" },
        { id: "13", name: "2030" },
        { id: "14", name: "2031" },
      ],
  };

  schema = {
    cardnumber: Joi.string().required().label("Card Number"),
    nameoncard: Joi.string().required().label("Name on card"),
    ccv: Joi.number().max(3).label("CCV"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  handleChange2 = (event) => {
    this.setState(
      {
        value: event.target.value,
      },
      this.props.onChange(event)
    );
  };

  handleChange3 = (event) => {
    this.setState(
      {
        year: event.target.value,
      },
      this.props.onChange(event)
    );
  };

  handleChange4 = (event) => {
    this.setState(
      {
        month: event.target.value,
      },
      this.props.onChange(event)
    );
  };

  render() {
    const { value, year, month, handleChange2, handleChange3, handleChange4 } =
      this.props;
    const { months, years } = this.state;

    let monthsList =
      months.length > 0 &&
      months.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

      let yearsList =
      years.length > 0 &&
      years.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);

    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="payment"
            name="payment1"
            value={value}
            onChange={handleChange2}
          >
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Credit/Debit card payment (We accept Visa and mastercard)"
            />
            <Grid container className="mb-1">
              <Grid item xs={4}>
                {this.renderLabel(
                  "cardnumber",
                  "Card number*",
                  "col-form-label"
                )}
              </Grid>
              <Grid item xs={8}>
                {this.renderInput("cardnumber", "text", "input")}
              </Grid>
            </Grid>
            <Grid container className="mb-1">
              <Grid item xs={4}>
                {this.renderLabel(
                  "nameoncard",
                  "Name on card*",
                  "col-form-label"
                )}
              </Grid>
              <Grid item xs={8}>
                {this.renderInput("nameoncard", "text", "input")}
              </Grid>
            </Grid>
            <Grid container className="mb-1">
              <Grid item xs={4}>
                {this.renderLabel(
                  "expirationdate",
                  "Expiration Date*",
                  "col-form-label"
                )}
              </Grid>
              <Grid item xs={4}>
                <FormControl className="selectFormControl pr">
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={month}
                    onChange={handleChange4}
                    input={<BootstrapInput />}
                    className="NativeSelect"
                  >
                    <option selected value={10}>
                      - Choose months -
                    </option>
                     {monthsList}
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="selectFormControl pl">
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={year}
                    onChange={handleChange3}
                    input={<BootstrapInput />}
                    className="NativeSelect"
                  >
                    <option selected value={10}>
                      - Choose Year -
                    </option>
                   {yearsList}
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className="mb-1">
              <Grid item xs={4}>
                {this.renderLabel("ccv", "CCV*", "col-form-label")}
              </Grid>
              <Grid item xs={4}>
                {this.renderInput("ccv", "text", "input")}
              </Grid>
              <Grid item xs={4}>
                <img className="ccvImg" src={ccv} alt="credit card" />
              </Grid>
            </Grid>
            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Cash on delivery"
            />
            <Grid container>
              <Grid item md={6} sm={6} xs={12}>
                <div className="custom-file">
                  <input
                    name="customFileLangHTML"
                    type="file"
                    className="custom-file-input"
                    id="customFileLangHTML"
                  />
                  <label
                    name="customFileLangHTML"
                    className="custom-file-label"
                    htmlFor="customFileLangHTML"
                    data-browse="VALIDATE"
                  >
                    Enter coupon code here
                  </label>
                </div>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                {this.renderButton("Pay now", "paynowBtn")}
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </form>
    );
  }
}
 
export default PaymentForm;