import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles} from '@material-ui/core/styles';
import NavLogoModal from '../images/NavLogoModal.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LoginForm from './loginForm';




const useStyles = makeStyles((theme) => ({
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
 title: {
     fontSize: "1.5rem",
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

export default function LoginModal() {
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
        Login
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
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
                <div className="modal-content">
                <div className="modal-header text-center">
                       <img className="signup-logo" src={NavLogoModal} alt="logo"/>
                 </div>               
                <div className="modal-middle mx-3">
                   <h4 className="modal-title w-100 font-weight-bold"><span className={classes.title}>Member login</span></h4>
                </div>
              <div className="modal-body mx-3">
                <LoginForm />
              </div>
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