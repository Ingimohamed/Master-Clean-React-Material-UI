import React, { Component } from "react";
import DetailedAccordion from "./OrderItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import shirt from "../images/shirt.png";
import backpack from "../images/backpack.png";
import bags from "../images/bags.png";
import blanketscovers from "../images/blanketscovers.png";
import blouse from "../images/blouse.png";
import dress from "../images/dress.png";
import delicates from "../images/delicates.png";
import galabya from "../images/galabya.png";
import galabya2 from "../images/galabya2.png";
import overcoat from "../images/overcoat.png";
import pajamas from "../images/pajamas.png";
import pants from "../images/pants.png";
import pillows from "../images/pillows.png";
import pullover from "../images/pullover.png";
import shorts from "../images/shorts.png";
import shoes from "../images/shoes.png";
import skirts from "../images/skirts.png";
import suits from "../images/suits.png";
import sweaters from "../images/sweaters.png";
import tie from "../images/tie.png";
import tshirt from "../images/tshirt.png";
import OrderHeader from "./OrderHeader";

const useStyles = (theme) => ({
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
});

class Order extends Component {
  state = {
    orders: [
      { id: 1, images: shirt },
      { id: 2, images: tshirt },
      { id: 3, images: pajamas },
      { id: 4, images: pullover },
      { id: 5, images: sweaters },
      { id: 6, images: overcoat },
      { id: 7, images: suits },
      { id: 8, images: tie },
      { id: 9, images: galabya },
      { id: 10, images: galabya2 },
      { id: 11, images: shorts },
      { id: 12, images: pants },
      { id: 14, images: blouse },
      { id: 15, images: dress },
      { id: 16, images: skirts },
      { id: 17, images: backpack },
      { id: 18, images: bags },
      { id: 19, images: shoes },
      { id: 20, images: pillows },
      { id: 21, images: blanketscovers },
      { id: 22, images: delicates },
    ],
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <OrderHeader />
        <Container>
          <Grid container className={classes.container}>
            {this.state.orders.map((order) => (
              <Grid item xs={4}>
                <DetailedAccordion key={order.id} images={order.images} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(Order);
