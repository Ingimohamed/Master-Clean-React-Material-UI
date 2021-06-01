import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import howitworks1 from '../images/howitworks1.png';
import howitworks2 from '../images/howitworks2.png';
import howitworks3 from '../images/howitworks3.png';
import howitworks4 from '../images/howitworks4.png';

const theme = createMuiTheme({});
const useStyles = theme => ({
  container: {
    padding: "6rem 0",
  },
  typography: {
    textAlign: "center",
    color: "#00527D",
    fontSize: "46px",
    fontWeight: "600",
    padding: "0 0 3rem 0",
  },
  grid: {
    maxWidth: "22%",
  },
  img: {
      width: "48%",
      display: "block",
    margin: "auto",
    [theme.breakpoints.up('xs')]: {
      width: "48%",
      display: "block",
      margin:"auto",
    },
    [theme.breakpoints.up('sm')]: {
      width: "48%",
    },
    [theme.breakpoints.up('md')]: {
      width: "62%",
    },
    
    
  },
  h4: {
    color: "#00527D",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontSize:"1.5rem",
  },
  p: {
    color: "#53656F",
    fontWeight: "300",
    textAlign: "center",
    marginTop: "0px",
    marginBottom:"1rem",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    padding: "0 7rem",
    [theme.breakpoints.up('sm')]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.up('md')]: {
      padding: "0 2rem",
    },
  },
  column: {
    [theme.breakpoints.up('xs')]: {
      marginBottom:"2rem",
    }
  },
});

class HowitworksImages extends Component {
  state = {
    titleh4: this.props.titleh4,
    titleP: this.props.titleP,
    images: this.props.images,
  };
  render() { 
    const { classes } = this.props;
    return ( 
        
          <Grid className={classes.column}  item xs={12} sm={6} md={3}>
              <img className={classes.img} src={this.state.images} alt="" />
              <Typography className={classes.h4}>{this.state.titleh4}</Typography>
              <Typography className={classes.p}>{this.state.titleP}</Typography>
          </Grid>
            
     );
  }
}
 
export default withStyles(useStyles) (HowitworksImages);
