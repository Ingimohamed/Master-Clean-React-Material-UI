import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import shirt from "../images/shirt.png";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  root: {
    width: "100%",
  },
  details: {
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "2px 2px 4px",
    borderRadius: "15px",
    marginTop: "-76px",
    paddingTop: "56px",
    marginLeft: "23px",
    width: "183px",
  },
  image: {
    width: "198px",
  },
  accordion: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});

class OrderItem extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
    images: this.props.images,
  };
  render() {
    const { classes } = this.props;
    // const setState = React.useState({});
    const handleChange = (event) => {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <Container>
        <div className={classes.root}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <img
                className={classes.image}
                src={this.state.images}
                alt="order"
              />
            </AccordionSummary>

            <AccordionDetails className={classes.details}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedF}
                        onChange={handleChange}
                        name="checkedF"
                        color="primary"
                      />
                    }
                    label="Primary"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Primary"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                    label="Primary"
                  />
                </Grid>

                <Button variant="outlined" color="primary">
                  Primary
                </Button>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(OrderItem);

// export default function DetailedAccordion() {
//   const classes = useStyles();

//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//     checkedF: true,
//     checkedG: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

//   return (

//   );
// }
