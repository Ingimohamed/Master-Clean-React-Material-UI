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
import HowitworksImages from './HowitworksImages';
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
    fontSize: "34px",
    fontWeight: "600",
    padding: "0 0 3rem 0",
    [theme.breakpoints.up('sm')]: {
      fontSize: "46px",
    },
  },
  grid: {
    maxWidth: "22%",
  },
  img: {
    width: "42%",
    [theme.breakpoints.up('md')]: {
      width: "82%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "90%",
    },
  },
});

class Howitworks extends Component {
  state = {
    works: [
      {
        id: 1,
        titleh4: "Place an order",
        titleP:"Place an order using our website its simple and easy.",
        images: howitworks1,
      },
      {
        id: 2,
        titleh4: "We pick it",
        titleP:"Just let’s know your location.",
        images: howitworks2,
      },
      {
        id: 3,
        titleh4: "We clean it",
        titleP:"We guarantee you’ll be satisfied - we put a quality on all items.",
        images: howitworks3,
      },
      {
        id: 4,
        titleh4: "We deliver it",
        titleP:"We deliver your clean clothes back to you, anytime and anywhere.",
        images: howitworks4,
      },
    ],
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
            
          {this.state.works.map((work) => (  
                <HowitworksImages
                  key={work.id}
                titleh4={work.titleh4}
                titleP={work.titleP}
                  images={work.images}
                />
            ))}
             
        </Grid>
      </Container>
    </ThemeProvider>
     );
  }
}
 
export default withStyles(useStyles) (Howitworks);
