import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import NavLogoModal from '../images/NavLogoModal.png';
import Grid from '@material-ui/core/Grid';
import turnOut from '../images/turnOut.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles((theme) => ({
  // '& .MuiDialog-paperWidthSm-229': {
  //   width:"917px",
  // },
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
  row: {
    margin:"20px 0px 20px 0px",
 },
 mobilMargin: {
     marginBottom: "16px",
     [theme.breakpoints.up('sm')]: {
         marginBottom: "0px",
         paddingRight:"10px",
     },
 },
 Padd: {
     paddingLeft:"10px",
 },
}));

export default function SignUpModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button className={classes.btn} onClick={handleClickOpen('body')}>
        Sign up
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <IconButton onClick={handleClose}>
               <ArrowBackIosIcon/>
          </IconButton>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
                 <div className="modal-content">
                
                <div className="modal-header text-center">
                       <img className="signup-logo" src={NavLogoModal} alt="logo"/>
                 </div>
                                   
                <div className="modal-middle mx-3">
                   <h4 className="modal-title w-100 font-weight-bold"><span>Sign up</span></h4>
                       <p>Please fill in this form to create an account</p>
                   <div className="border-bottomm"></div>
                </div>
           <div className="modal-body mx-3">
               <Grid container  className={classes.row}>
                   <Grid item sm={6}xs={12} className={classes.mobilMargin}>
                       <label for="inputDisabledEx2" className="label">First name</label>
                       <input type="text" id="inputDisabledEx2" className="form-control"/>
                   </Grid>
                   <Grid item sm={6}xs={12} className={classes.Padd}>
                       <label for="inputDisabledEx2" className="label">Last name</label>
                       <input type="text" id="inputDisabledEx2" className="form-control"/>
                   </Grid>
               </Grid>
           <Grid container className={classes.row}>
               <Grid item xs={12}>
                   <label for="inputDisabledEx2" className="label">Email</label>
               </Grid>
               <Grid item xs={12}>
                   <input type="text" id="inputDisabledEx2" className="form-control"/>
               </Grid>
           </Grid>
                 
           <Grid container className={classes.row}>
               <Grid item sm={6} xs={12} className={classes.mobilMargin}> 
                   <label for="inputDisabledEx2" className="label">password</label>
                   <input type="password" id="inputDisabledEx2" className="form-control"/>
               </Grid>
               <Grid item sm={6} xs={12} className={classes.Padd}>
                   <label for="inputDisabledEx2" className="label">Confirm password</label>
                   <input type="password" id="inputDisabledEx2" className="form-control"/>
               </Grid>
           </Grid>
                                   
           <Grid container className={classes.row}>
           <Grid item xs={12}>
               <label for="inputDisabledEx2" className="label">Adress</label>
           </Grid>
               <Grid item xs={12}>
                   <input type="text" id="inputDisabledEx2" className="form-control"/>
               </Grid>
              </Grid>
                                   
              
              <Grid container className={classes.row}>
           <Grid item xs={12}>
               <label for="inputDisabledEx2" className="label">Street name</label>
           </Grid>
               <Grid item xs={12}>
                   <input type="text" id="inputDisabledEx2" className="form-control"/>
               </Grid>
            </Grid>
                                   
           </div>
                           
           <Grid container alignItems="center" className={classes.row}>
               <Grid item className="centered">
                   <Button className="signupBtn-modal">Sign up</Button>
               </Grid>
           </Grid>
           </div>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

// import React, { Component } from 'react';
// import { Confirm } from 'react-st-modal';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import SignUpContent from './signUpContent';
// import CloseSignup from './signUpCloseBtn';
// import ConfirmBtn from './okBtn';
// const useStyles = theme => ({
//   btn: {
//     background: "#00527D",
//     color: "white",
//     fontWeight: "400",
//     borderRadius: "30px",
//     fontSize:"25px",
//     border: "none",
//     width: "170px",
//     height: "45px",
//     marginRight: "15px",
//     outline: "none",
//     textTransform: "none",
//     fontFamily:"inherit",

//     "&:hover": {
//       background: "#003957",
//     },
//   },
// });
// class SignUpModal extends Component {
//     state = {  }
//   render() { 
//     const { classes } = this.props;
//         return ( 
//           <div>
//             <Button
//            className={classes.btn}
//             onClick={async () => {
//               const result = await Confirm(<SignUpContent />, "", <ConfirmBtn/>,<CloseSignup/>);
              
//               if (result) {
//                 // Сonfirmation confirmed
//               } else {
//                 // Сonfirmation not confirmed
//               }
//             }}
//           >
//            Sign Up
//           </Button>
//         </div>
//          );
//     }
// }
 
// export default withStyles(useStyles) (SignUpModal);