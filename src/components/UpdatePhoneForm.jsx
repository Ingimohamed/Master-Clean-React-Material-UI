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

class UpdatePhoneForm extends Form {
  state = {
    data: { phone: ""},
    errors:{},
};

schema = {
  phone: Joi.number().required().min(11).max(11).label('Phone'),
};
  
doSubmit = () => {
  //call the server
  console.log("Submitted");
}
  render() {
    const { classes } = this.props;
    return (
   
<form className={classes.padForm}>
  <Grid container className="form-group row">
    <Grid item xs={12}>
            {this.renderInput('phone','tel','form-control_a')} 
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
 
export default withStyles(useStyles) (UpdatePhoneForm);
