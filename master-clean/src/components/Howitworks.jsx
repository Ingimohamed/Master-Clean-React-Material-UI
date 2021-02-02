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
    width: "82%",
  },
});

class Howitworks extends Component {
  state = {
    images: [howitworks1, howitworks2, howitworks3, howitworks4]
  };
  render() { 
    const { classes } = this.props;
    return ( 
      <ThemeProvider theme={theme}>
      <Container>
        <Grid container  direction="row"
                         justify="center"
                         alignItems="center" className={classes.container}>
          <Grid item xs={12}>
            <Typography className={classes.typography} variant="h3">
              How it works
            </Typography>
          </Grid>
           
          {this.state.images.map(image => <Grid key={image} item xs={3}>
              <img className={classes.img} src={image} alt=""/>
              </Grid>)}
        </Grid>
      </Container>
    </ThemeProvider>
     );
  }
}
 
export default withStyles(useStyles) (Howitworks);
