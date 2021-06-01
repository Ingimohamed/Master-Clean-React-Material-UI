import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import addingaddress from '../images/addingaddress.png';
import UpdatePasswordForm from './UpdatePasswordForm';




const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '4rem',
        boxShadow: theme.shadows[5],
        padding: "32px",
        maxHeight: "calc(100vh - 3.5rem)",
        overflow: "hidden",
        width: "602px",
        margin: "1.75rem auto !important",
      },
    imgIcon: {
        width: "55%",
        float:"right",
    },
    iconButton: {
        float:"right",
    },
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
      btn2: {
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
        float:"right",
    },
    modalTitle: {
        fontWeight: "500",
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif",
        lineHeight: "1.5",
        fontSize: "1.25rem",
        margin: "0px 0px 22px 0px",
    },
    '@global': {
        '.MuiPaper-rounded': {
            borderRadius:"4rem!important",
        },

        '.MuiSvgIcon-root': {
            fontSize: "2.5rem",
        },
        '.MuiDialogTitle-root': {
            padding:"23px 24px 0px 48px",
        },
    },
}));
const styles = (theme) => ({
   
  root: {
    margin: 0,
        padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#D1ECF7",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  ); 
});


  
const DialogContent = withStyles((theme) => ({
  root: {
        padding: theme.spacing(2),
      width:"550px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding:"2rem",
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
      <IconButton onClick={handleClickOpen} className={classes.iconButton}>
            <img className={classes.imgIcon} src={addingaddress} alt="addingaddress"/>     
        </IconButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle className={classes.modalTitle} id="customized-dialog-title" onClose={handleClose}>
           Update Password
        </DialogTitle>
        <DialogContent>
                  <UpdatePasswordForm />          
        </DialogContent>
              {/* <DialogActions>     
        <Grid container className="form-group row">
            <Grid item xs={6}>
                <Button autoFocus className={classes.btn} onClick={handleClose} color="primary">
                Cancel
            </Button>
            </Grid>
        </Grid>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
