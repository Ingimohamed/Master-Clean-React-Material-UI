import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import AddNewAddress from './AddNewAddressModelContent';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:"auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    },
    backToProfileBtn: {
        boxShadow: "2px 2px 4px lightgrey",
        float: "right",
        padding: "6px 25px",
        background: "white",
        color: "#00527D",
        fontSize: "20px",
        borderRadius: "14px",
        outline: "none",
        textTransform:"none",
    },
}));

export default function AddNewAddressModel() { 
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.backToProfileBtn} type="button" onClick={handleOpen}>
        Add new address
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <AddNewAddress />
        </Fade>
      </Modal>
    </div>
  );
}
