import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import headerimg2 from "../images/headerimg2.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const theme = createMuiTheme({
  status: {
    danger: "#00527D",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(255,225,255,0.5),rgba(255,255,255,0.5)), url(${headerimg2})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundOrigin: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "left",
  },
  typographyh1: {
    color: "#00527D",
    fontSize: "70px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  typographyh3: {
    color: "#00527D",
    fontSize: "30px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    padding: "18% 10%",
  },
  btn: {
    background: "#00527D",
    color: "white",
    fontWeight: "400",
    borderRadius: "30px",
    border: "none",
    width: "170px",
    height: "45px",
    marginRight: "15px",
    outline: "none",

    "&:hover": {
      background: "#003957",
    },
  },

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function HomeHeader() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };
    
    const handleOpen2 = () => {
        setOpen(true);
      };
    
      const handleClose2 = () => {
        setOpen(false);
      };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className={classes.root}>
        <Container className={classes.container}>
          <Typography
            className={classes.typographyh1}
            variant="h1"
            component="h2"
            gutterBottom
          >
            We offer the best laundering experience
          </Typography>
          <Typography
            className={classes.typographyh3}
            variant="h3"
            gutterBottom
          >
            Sign up now and make your first order
          </Typography>
          <Box component="span" m={2}>
            <Button
              onClick={handleOpen}
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Sign up
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
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">Transition modal one</h2>
                  <p id="transition-modal-description">
                    react-transition-group animates me.
                  </p>
                </div>
              </Fade>
            </Modal>

            <Button  onClick={handleOpen2} className={classes.btn} variant="contained" color="primary">
                          Login
            </Button>
                      
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose2}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h2 id="transition-modal-title">Transition modal Two</h2>
                  <p id="transition-modal-description">
                    react-transition-group animates me.
                  </p>
                </div>
              </Fade>
            </Modal>

                      

          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
