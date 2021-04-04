import React, { Component } from 'react';
import turnOut from '../images/turnOut.png';



class CloseSignup extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img className="close" data-dismiss="modal" aria-label="Close" src={turnOut} alt="turn out" />
            </div>
         );
    }
}
 
export default CloseSignup;