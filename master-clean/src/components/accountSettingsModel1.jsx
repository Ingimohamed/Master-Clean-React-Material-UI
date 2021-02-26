import React, { Component } from 'react';
import { Confirm } from 'react-st-modal';
import { withStyles } from '@material-ui/core/styles';
import LoginContent from './loginContent';
import CloseSignup from './signUpCloseBtn';
import ConfirmBtn from './okBtn';
import IconButton from '@material-ui/core/IconButton';
import addingaddress from '../images/addingaddress.png';


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
  iconButton: {
    float:"right",
  },
  imgIcon: {
    width: "55%",
    float:"right",
},
});



class UpdateAccountInfo extends Component {
    state = {  }
  render() { 
    const { classes } = this.props;
        return ( 
          <span>
            <IconButton className={classes.iconButton}
             onClick={async () => {
              const result = await Confirm(<LoginContent />, "", <ConfirmBtn/>,<CloseSignup/>);
              
              if (result) {
                // Сonfirmation confirmed
              } else {
                // Сonfirmation not confirmed
              }
              }}
            >
            <img className={classes.imgIcon} src={addingaddress} alt="addingaddress"/>     
        </IconButton>
        </span>
         );
    }
}
 
export default withStyles(useStyles) (UpdateAccountInfo);