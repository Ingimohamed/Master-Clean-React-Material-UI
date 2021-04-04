import React, { Component } from 'react';
import NavLogoModal from '../images/NavLogoModal.png';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
    row: {
       margin:"20px 0px 20px 0px",
    },
    title: {
        fontSize: "1.5rem",
    },
});

class LoginContent extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <div>
            <div className="modal-content">
                
     <div className="modal-header text-center">
            <img className="signup-logo" src={NavLogoModal} alt="logo"/>
      </div>
                        
     <div className="modal-middle mx-3">
        <h4 className="modal-title w-100 font-weight-bold"><span className={classes.title}>Member login</span></h4>
     </div>
<div className="modal-body mx-3">
 
<Grid container className={classes.row}>
    <Grid item xs={12}>
        <label for="inputDisabledEx2" className="label">Email</label>
    </Grid>
    <Grid item xs={12}>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
    </Grid>
</Grid>

<Grid container className={classes.row}>
    <Grid item xs={12}>
        <label for="inputDisabledEx2" className="label">Password</label>
    </Grid>
    <Grid item xs={12}>
        <input type="password" id="inputDisabledEx2" className="form-control"/>
    </Grid>
</Grid>
                  
</div>
                
<Grid container alignItems="center" className={classes.row}>
    <Grid item className="centered">
        <Button className="signupBtn-modal">Login</Button>
    </Grid>
</Grid>
</div>
        </div>
         );
    }
}
 
export default withStyles(useStyles) (LoginContent);