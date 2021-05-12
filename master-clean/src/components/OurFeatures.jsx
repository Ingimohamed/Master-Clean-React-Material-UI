import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OurFeaturesItem from "./ourFreaturesItem";
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";   

const useStyles = (theme) => ({
  ThemeProvider: {
    background: "#ECF7FC",
  },
  container: {
    padding: "3rem 0",
  },
  typography: {
    textAlign: "center",
    color: "#00527D",
    fontSize: "34px",
    fontWeight: "600",
    padding: "3rem 0",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "46px",
  },
});

class OurFeatures extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: "Personalised experiences",
        images: feature1,
        body:
          "We take utmost care of your clothes, the laundry is done according to the cloth type and the nature of stains.",
      },
      {
        id: 2,
        title: "Quality",
        images: feature2,
        body:
          "We use the best products, to assure that your favorite clothes are always there for you to wear.",
      },
      {
        id: 3,
        title: "Over 20 years of experience",
        images: feature3,
        body:
          "We have been in this field for more than 20 years and that makes us professional in what we do.",
      },
      {
        id: 4,
        title: "Fast service",
        images: feature4,
        body:
          "jjakhbcasbchbascbasj skas c as chbasjcjasbcascbas cabscjascbascbasj",
      },
    ],
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.ThemeProvider}>
        <Container>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Typography className={classes.typography} variant="h3">
                Our Features
              </Typography>
            </Grid>

            {this.state.cards.map((card) => (
              <Grid item xs={12} md={6}>
                <OurFeaturesItem
                  key={card.id}
                  title={card.title}
                  body={card.body}
                  images={card.images}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}
export default withStyles(useStyles)(OurFeatures);
