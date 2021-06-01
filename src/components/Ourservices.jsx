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
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';


const theme = createMuiTheme({});
const useStyles = theme => ({
  container: {
    padding: "3rem 0",
  },
  typography: {
    textAlign: "center",
    color: "#00527D",
    fontSize: "34px",
    fontWeight: "600",
    padding: "0rem 0",
    [theme.breakpoints.up('sm')]: {
      fontSize: "46px",
    },
  },
  ThemeProvider: {
    background: "white",
  },
  img: {
    width:"65%",
  },
  subtitle: {
    fontSize: "1rem",
    padding: "0rem 0rem 3rem 0rem",
    fontWeight: "600",
    color: "#00527D",
  },
  column: {
    marginBottom: "20px",
    [theme.breakpoints.up('sm')]: {
      marginBottom:"0",
    },
  },
});

class OurServices extends Component {
  state = {
    images: [service1, service2, service3]
  };
  render() { 
    const { classes } = this.props;
    return ( 
      <div className={classes.ThemeProvider}>
      <Container>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="h3">
                Our Services
            </Typography>
              <Typography className={classes.subtitle}>Stay clean and dress well</Typography>
          </Grid>
          {this.state.images.map(image => <Grid className={classes.column} key={image} item xs={12} sm={4}>
              <img className={classes.img} src={image} alt=""/>
              </Grid>)}
        </Grid>
      </Container>
    </div>
     );
  }
}
 
export default withStyles(useStyles) (OurServices);

