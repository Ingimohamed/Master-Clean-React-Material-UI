import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import headerimg2 from "../images/headerimg2.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUpModal from './homeSignupModal';
import LoginModal from './homeLoginModal';
import Grid from '@material-ui/core/Grid';
import jwtDecode from 'jwt-decode';


const theme = createMuiTheme({
  status: {
    danger: "#00527D",
  }, 
});

const useStyles = theme => ({
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
    marginLeft: "17%",
    [theme.breakpoints.up('xs')]: {
      maxWidth: "100%",
      marginTop: "16px",
      marginBottom: "16px",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign:"center",
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: "31%",
      margin:"0px",
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: "23%",
      margin:"0px",
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: "19%",
      margin:"0px",
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: "19%",
      margin:"0px",
    },
  },
});


class HomeHeader extends Component {
  state = {
   
 }
 componentDidMount() {
  try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
  } catch (error) {}
  
}
render(){
  const { classes } = this.props;
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
                <Grid className={classes.rowBtns} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <SignUpModal user={this.state.user} />
                </Grid>
               <Grid className={classes.rowBtns} item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <LoginModal user={this.state.user}/>
               </Grid>
            </Grid>
          </Container>
        </Paper>
      </ThemeProvider>
    );
}
}
  
  export default withStyles(useStyles) (HomeHeader);
