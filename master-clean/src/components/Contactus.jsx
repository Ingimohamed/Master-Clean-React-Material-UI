import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ContactHeader from "./ContactHeader";
import GoogleMap from "./Googlemap";
import Grid from "@material-ui/core/Grid";
import phone from '../images/phone.png';
import location from '../images/location.png';
import msg from '../images/msg.png';


const useStyles = theme => ({
  root: {
    paddingBottom: "3rem",
    paddingTop: "3rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.up('sm')]: {
      paddingBottom: "3rem",
      paddingTop: "3rem",
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: "3rem",
      paddingTop: "3rem",
      paddingLeft: "4rem",
      paddingRight: "4rem",
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: "3rem",
      paddingTop: "3rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
    },
  },
  paper: {
    textAlign: 'center',
    color: "#00527D",
    fontWeight: "400",
    fontSize:"18px",
  },
  ul: {
    listStyle: "none",
    paddingLeft: "0",
    float: "left",
    marginTop: "15px",
    marginRight: "50px",
  },
  li: {marginBottom:"10px",display:"flex",marginBottom:"35px",},
  iconUser: {
    width: "50px",
    height: "50px",
    position: "relative",
    marginRight: "10px",
    
  },
  iconText: {
    fontSize: "1rem",
    fontWeight: "bolder",
    fontFamily:"Roboto,sans-serif",
    textAlign: "left",
    display: "block",
    marginTop: "auto",
    marginBottom: "auto",
    color:"#00527D",
  }, 
  iconText2:{
    fontSize: "1rem",
    fontWeight: "300",
    fontFamily:"Roboto,sans-serif",
    textAlign: "left",
    display: "block",
    marginTop: "auto",
    marginBottom: "auto",
    color:"#00527D",
  },
  title: {
    fontWeight: "600",
    color: "#00527D",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.5rem",
    [theme.breakpoints.up('sm')]: {
      marginBottom: "20px",
      paddingBottom: "1.5rem",
    },
  },
  blue: {
    color: "#00527D",
    fontWeight: "300",
    fontFamily: "Roboto,sans-serif",
    textAlign:"left",
  },
  container: {
    flexGrow: 1,
  },
  firstColumn: {
    marginTop:"47px",
  },
});


class Contactus extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backg}>
        <ContactHeader />
        <div className={classes.root}>
        <Typography className={classes.title} variant="h1" align="center">Contact Us</Typography>
        <Grid container  justify="center" className={classes.container} spacing={2}>
         
            <Grid item xs={12} sm={6} className={classes.firstColumn}>
              <Typography className={classes.blue}>We enjoy our work and doing what is necessary. You can reach us from the contact information below.</Typography>
        <div className={classes.paper}>
                <ul className={classes.ul}>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={location} alt="" />
                  <Typography className={classes.iconText}>
                      Office Location <br />
                      <span className={classes.iconText2}>
                        Dooley Branch Rd Millen, GA 30442, USA
                        </span>
                  </Typography>
                 
                
                </li>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={phone} alt="" />
                  <Typography className={classes.iconText}>
                      Phone Number <br/>
                      <span className={classes.iconText2}>
                        +90 987 678 9834 <br />
                        +90 567 098 785
                        </span>
                  </Typography>
                </li>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={msg} alt="" />
                  <Typography className={classes.iconText}>
                      Email Address <br/>
                      <span className={classes.iconText2}>
                      contact@domain.com <br />
                      support@domain.com
                        </span>
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <GoogleMap/>
          </Grid>
        </Grid>
       </div>
      </div>
    );
  }
}

export default withStyles(useStyles) (Contactus);
