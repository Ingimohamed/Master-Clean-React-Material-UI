import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import settingbox3 from '../images/settingbox3.png';
import mapbox2 from '../images/mapbox2.png';
import box1 from '../images/box1.png';
import egyptflag from '../images/egyptflag.png';
import { Link, NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    border: "1px solid #CAE7F1",
    padding: "26px",
    borderRadius: "45px",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
    height: "290px",
    width: "100%",
    padding: theme.spacing(2),
  },
  imgBox: {
    width: "19%",
    verticalAlign:"middle",
  },
  navLink: {
    display: "inlineBlock",
    marginLeft: "3px",
    fontSize: "21px",
    textDecoration: "none",
    color: "#00527D",
    fontWeight: "700",
    fontFamily:"'Poppins', sans-serif",
  },
  box1Text: {
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    color: "#00527D",
    fontSize: "17px",
    lineHeight: "1.5",
  },
  cairoText: {
    fontSize: "17px",
    color: "#00527D",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  },
  boxBody: {
    padding: "51px 0px 37px 0px",
  },
  egyptFlag: {
    width: "15%",
    verticalAlign: "middle",
    marginRight:"15px",
  },
  divCairo: {
    marginTop: "20px",
    textAlign:"left",
  },
}));

export default function ProfilePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
            <Paper elevation={3} className={classes.box}>
            <img className={classes.imgBox} src={box1} alt="order" />
            <Link className={classes.navLink} to="/MyOrders"> MY ORDERS</Link>
            <div className={classes.boxBody}>
                <Grid container>
                    <Grid className={classes.box1Text} item xs={6}>SEG79927065</Grid>
                    <Grid className={classes.box1Text} item xs={6}>10 SEP 2019</Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.box1Text} item xs={6}>SEG79927058</Grid>
                    <Grid className={classes.box1Text} item xs={6}>5SEP 2019</Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.box1Text} item xs={6}>SEG79927895</Grid>
                    <Grid className={classes.box1Text} item xs={6}>20 AUG 2019</Grid>
                  </Grid>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={3} className={classes.box}>
            <img className={classes.imgBox} src={mapbox2} alt="order" />
            <Link className={classes.navLink} to="/AddressBook"> Address Book</Link>
            <div className={classes.boxBody}>
              <Typography align="left" className={classes.box1Text}>
                Hassan Ma’moon Nasr City,<br/>
                Cairo Governorate
              </Typography>
              <div className={classes.divCairo}>
                <img className={classes.egyptFlag} src={egyptflag} alt="egyptflag" />
                <span className={classes.cairoText}>Cairo</span>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper elevation={3} className={classes.box}>
            <img className={classes.imgBox} src={settingbox3} alt="order" />
            <NavLink className={classes.navLink} to="/AccountSetting">Account Settings</NavLink>
            <div className={classes.boxBody}>
                <Grid container>
                    <Grid className={classes.box1Text} item xs={6}>Phone</Grid>
                    <Grid className={classes.box1Text} item xs={6}>+201141987688</Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.box1Text} item xs={6}>Country</Grid>
                    <Grid className={classes.box1Text} item xs={6}>EGY</Grid>
                </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
