import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import closeModal from '../images/closeModal.png';


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
  modalHeader: {
    borderBottom: "none",
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    padding: "0px 38px",
    display:"flex",
  },
  modalTitle: {
    fontWeight: "500",
    color: "#00527D",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.5",
    fontSize: "1.25rem",
    margin: "0px 0px 22px 0px",
  },
  formControl: {
    border: "1px solid #BFE5F4",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "500px",
    height: "calc(1.5em + .5rem + 2px)",
    padding: ".25rem .5rem",
    lineHeight: "1.5",
    display: "block",
    color: "#495057",
    backgroundColor: "white",
    backgroundClip: "padding-box",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    overflow: "visible",
    margin: "9px 0px 12px 0px",
    
  },
  modalFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "1rem",
    
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
  padForm: {
    padding:"0px 20px",
  },
  spanOfCloseIcon: {
    marginLeft:"auto",
  },
}));

export default function UpdatePasswordContent() {
  const classes = useStyles();

  return (
   
  <div className={classes.paper}>
    <div className={classes.modalContent}>
      <div className={classes.modalHeader}>
        <h5 className={classes.modalTitle}>UPDATE PHONE NUMBER</h5>
        <span aria-hidden="true" className={classes.spanOfCloseIcon}>
              <img className="closeModal-icon" src={closeModal} alt="close"/>
          </span>
        </div> 
      <div className="modal-body margin-body">
<form className={classes.padForm}>
  <Grid container className="form-group row">
    <Grid item xs={12}>
       <input className={classes.formControl} type="text"/>
    </Grid>
  </Grid>
</form>
        </div>
        <Grid container className={classes.modalFooter}>
          <Grid item xs={6}>
              <Button type="button" className={classes.btn} data-dismiss="modal">Cancel</Button>
          </Grid>
          <Grid item xs={6}>
              <Button  type="button" className={classes.btn2}>Update</Button>
          </Grid>
      </Grid>
    </div>
  </div>
  );
}
