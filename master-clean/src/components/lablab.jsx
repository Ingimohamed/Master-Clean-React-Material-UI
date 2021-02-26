import React, { Component } from 'react';
import NavLogoModal from '../images/NavLogoModal.png';
import turnOut from '../images/turnOut.png';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';




class SignUpModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="modal-content">
                    
         <div className="modal-header text-center">
                <img className="signup-logo" src={NavLogoModal} alt="logo"/>
                <img className="close" data-dismiss="modal" aria-label="Close" src={turnOut} alt="turn out"/>
          </div>
                            
         <div className="modal-middle mx-3">
            <h4 className="modal-title w-100 font-weight-bold"><span>Sign up</span></h4>
                <p>Please fill in this form to create an account</p>
            <div className="border-bottomm"></div>
         </div>
<div className="modal-body mx-3">
  <div className="row">
    <div className="col-6">
        <label for="inputDisabledEx2" className="disabled label">First name</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
     </div>
     <div className="col-6">
         
        <label for="inputDisabledEx2" className="disabled label">Last name</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
     </div>
  </div>
  <div className="row">
    <div className="col-12">
        
        <label for="inputDisabledEx2" className="disabled label">Email</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
    </div>
  </div>
          
  <Grid container className="row">
    <Grid item xs={6} className="col-6">
         
        <label for="inputDisabledEx2" className="disabled label">password</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
     </Grid>
     <Grid item xs={6} className="col-6">
         
        <label for="inputDisabledEx2" className="disabled label">Confirm password</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
     </Grid>
  </Grid>
  <div className="row">
    <div className="col-12">
        
        <label for="inputDisabledEx2" className="disabled label">Adress</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
    </div>
  </div>
  <div className="row">
    <div className="col-12">
       
        <label for="inputDisabledEx2" className="disabled label">Street name</label>
        <input type="text" id="inputDisabledEx2" className="form-control"/>
    </div>
  </div>
  </div>
                    
      <div className="modal-footer d-flex justify-content-center">
        <Button className="signupBtn-modal">Sign up</Button>
      </div>
    </div>
            </div>
         );
    }
}
 
export default SignUpModal;