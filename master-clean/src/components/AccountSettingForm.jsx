import React from 'react';
import Joi from "joi-browser";
import Form from './common/form';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  btn: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C2E5F1",
    padding: "6px 25px",
    backgroundColor: "white",
    color: "#00527D",
    fontSize: "20px",
    borderRadius: "14px",
    outline: "none",
    textTransform: "none",
    margin: ".375rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "1.5",
    width: "92%",
    float:"left",
  },
      padForm: {
        padding:"0px 20px",
      },
      spanOfCloseIcon: {
        marginLeft:"auto",
      },
});

class AccountSettingForm extends Form {
  state = {
    data: { fullname: "", lastname: "", gender:"" },
    errors:{},
};

schema = {
  fullname: Joi.string().required().label('Full Name'),
  lastname: Joi.string().required().label('Last Name'),
  gender:Joi.string().required().label('Gender'),
};
  
doSubmit = () => {
  //call the server
  console.log("Submitted");
}
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.padForm}>
  <Grid container className="form-group row">
    <Grid item xs={12}>       
            {this.renderLabel('fullname', 'Full Name', 'label_a')}
            {this.renderInput('fullname','text','form-control_a')} 
    </Grid>
  </Grid>
            
    <Grid container className="form-group row">
    <Grid item xs={12}>
            {this.renderLabel('lastname', 'Last Name', 'label_a')}
            {this.renderInput('lastname','text','form-control_a')} 
    </Grid>
  </Grid>
            
    <Grid container className="form-group row">
    <Grid item xs={12}>
            {this.renderLabel('gender', 'Gender', 'label_a')}
            {this.renderInput('gender','text','form-control_a')} 
    </Grid>
        </Grid>

        <Grid container className="form-group row">
          <Grid item xs={6}>
              <Button autoFocus className={classes.btn} onClick={this.props.handleClose} color="primary">
                  Cancel
              </Button>
          </Grid>
            <Grid item xs={6}>
                {this.renderButton("Update","updateBtn")}
            </Grid>
        </Grid>
</form>
     );
  }
}
 
export default withStyles(useStyles) (AccountSettingForm);
