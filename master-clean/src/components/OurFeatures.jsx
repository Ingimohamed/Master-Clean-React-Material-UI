import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import howitworks1 from '../images/howitworks1.png';
import howitworks2 from '../images/howitworks2.png';
import howitworks3 from '../images/howitworks3.png';
import howitworks4 from '../images/howitworks4.png';


const useStyles = makeStyles((theme) => ({
    ThemeProvider: {
      background: "#ECF7FC",  
    },
  container: {
    padding: "3rem 0",
  },
  typography: {
    textAlign: "center",
    color: "#00527D",
    fontSize: "46px",
    fontWeight: "600",
    padding: "3rem 0",
  },
}));

export default function OurFeatures() {
  const classes = useStyles();
  return (
    <div  className={classes.ThemeProvider}>
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="h3">
              Our Features
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <img src={howitworks1} alt=""/>
          </Grid>
          <Grid item xs={3}>
           <img src={howitworks2} alt=""/>
          </Grid>
          <Grid item xs={3}>
           <img src={howitworks3} alt=""/>
          </Grid>
          <Grid item xs={3}>
           <img src={howitworks4} alt=""/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
