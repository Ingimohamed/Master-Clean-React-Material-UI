import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import phone from '../images/phone.png';
import location from '../images/location.png';
import msg from '../images/msg.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    minHeight: 'auto',
    backgroundColor: "#003455",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    maxWidth: "90%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    fontWeight: "400",
    fontSize:"18px",
  },
  ul: {
    listStyle: "none",
    paddingLeft: "0",
    float: "none",
    marginTop: "15px",
    marginRight: "0px",
    [theme.breakpoints.up('sm')]: {
      marginRight: "0px",
      float: "none",
    },
    [theme.breakpoints.up('md')]: {
      marginRight: "50px",
      float:"left",
    },
  },
  li: {
    marginBottom: "10px",
    marginBottom: "35px",
    marginLeft: "auto",
    marginRight: "auto",
    display:"block",
      [theme.breakpoints.up('sm')]: {
        marginLeft: "auto",
        marginRight: "auto",
        display:"block",
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: "0px",
      marginRight: "0px",
      display:"flex",
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: "0px",
      marginRight: "0px",
      display:"flex",
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: "0px",
      marginRight: "0px",
      display:"flex",
    },
  },
  iconUser: {
    width: "50px",
    height: "50px",
    position: "relative",
    marginRight: "10px",
    
  },
  iconText: {
    fontSize: "18px",
    fontWeight: "400",
    textAlign: "center",
    display: "block",
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
      [theme.breakpoints.up('sm')]: {
        textAlign:"center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign:"left",
    },
    [theme.breakpoints.up('lg')]: {
      textAlign:"left",
    },
    [theme.breakpoints.up('xl')]: {
      textAlign:"left",
    },
    
  },
  ulServices: {
    textAlign: "center",
    listStyle: "none",
    paddingLeft: "0px",
    [theme.breakpoints.up('sm')]: {
      textAlign:"center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: "left",
    },
    [theme.breakpoints.up('xl')]: {
      textAlign: "left",
    },
  },
  footerTitles: {
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
      textAlign:"center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign:"left",
    },
    [theme.breakpoints.up('lg')]: {
      textAlign:"left",
    },
    [theme.breakpoints.up('xl')]: {
      textAlign:"left",
    },
  },
  liServices:{},
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        <Grid container spacing={3}>
         
          <Grid item md={5} xs={12}>
            <div className={classes.paper}>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={phone} alt="" />
                  <Typography className={classes.iconText}>
                  +20 2 24708092
                  </Typography>
                </li>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={location} alt="" />
                  <Typography className={classes.iconText}>
                  22 Gamal Abdul Nasser, An Nadi Al <br/>
                  Ahli, Nasr City, Cairo Governorate, Egypt
                  </Typography>
                </li>
                <li className={classes.li}>
                  <img className={classes.iconUser} src={msg} alt="" />
                  <Typography className={classes.iconText}>
                      Masterclean@gmail.com
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item md={3} xs={12}>
            <div className={classes.paper}>
              <Typography variant="h5" gutterBottom className={classes.footerTitles}>
                  <strong>SERVICES</strong> 
              </Typography>
                <ul className={classes.ulServices}>
                  <li className={classes.liServices}>Dry Clean</li>
                  <li className={classes.liServices}>Laundry</li>
                  <li className={classes.liServices}>Laundry App</li>
                  <li className={classes.liServices}>Laundry Service</li>
                  <li className={classes.liServices}>Laundry On-Demand</li>
                  <li className={classes.liServices}>Laundry Pickup &amp;  Delivery</li>
                  <li className={classes.liServices}>Wash &amp; Fold</li>
                  <li className={classes.liServices}>Ironing Services</li>
                </ul>
            </div>
          </Grid>

          <Grid item md={4} xs={12}>
            <div className={classes.paper}>
            <Typography variant="h5" gutterBottom className={classes.footerTitles}>
                <strong>ABOUT US</strong> 
              </Typography>
              <Typography className={classes.iconText}>
                  We offer the best laundering <br/> experience in the area.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}