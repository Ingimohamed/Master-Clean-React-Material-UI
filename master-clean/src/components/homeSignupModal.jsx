import React, { Component } from 'react';
import { Confirm } from 'react-st-modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SignUpContent from './signUpContent';
import CloseSignup from './signUpCloseBtn';
import ConfirmBtn from './okBtn';


const useStyles = theme => ({
  btn: {
    background: "#00527D",
    color: "white",
    fontWeight: "400",
    borderRadius: "30px",
    fontSize:"25px",
    border: "none",
    width: "170px",
    height: "45px",
    marginRight: "15px",
    outline: "none",
    textTransform: "none",
    fontFamily:"inherit",

    "&:hover": {
      background: "#003957",
    },
  },
});



class SignUpModal extends Component {
    state = {  }
  render() { 
    const { classes } = this.props;
        return ( 
          <div>
            <Button
           className={classes.btn}
            onClick={async () => {
              const result = await Confirm(<SignUpContent />, "", <ConfirmBtn/>,<CloseSignup/>);
              
              if (result) {
                // Сonfirmation confirmed
              } else {
                // Сonfirmation not confirmed
              }
            }}
          >
           Sign Up
          </Button>
        </div>
         );
    }
}
 
export default withStyles(useStyles) (SignUpModal);