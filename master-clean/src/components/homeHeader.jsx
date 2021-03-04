import React from "react";
import {createMuiTheme,makeStyles,ThemeProvider} from "@material-ui/core/styles";
import headerimg2 from "../images/headerimg2.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUpModal from './homeSignupModal';
import LoginModal from './homeLoginModal';
import Grid from '@material-ui/core/Grid';
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
    fontSize: "25px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.up('sm')]: {
      fontSize:"45px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"50px",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:"70px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:"70px",
    },
  },
  typographyh3: {
    color: "#00527D",
    fontSize: "19px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.up('sm')]: {
      fontSize: "30px",
      fontWeight: "600",
    },
  },
  container: {
    padding: "18% 10%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  rowBtns: {
    maxWidth: "100%",
    marginTop: "16px",
    marginBottom: "16px",
    marginLeft:"17%",
    [theme.breakpoints.up('sm')]: {
      maxWidth: "30%",
      margin:"0px",
    },
  },
}));

export default function HomeHeader() {
  const classes = useStyles();
 
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root}>
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
          <Grid container>
            <Grid className={classes.rowBtns} item xs={12} sm={6} md={6} lg={6} xl={6}><SignUpModal /></Grid> 
            <Grid className={classes.rowBtns} item xs={12} sm={6} md={6} lg={6} xl={6}> <LoginModal/></Grid>      
          </Grid>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}
