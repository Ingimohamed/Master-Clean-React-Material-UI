import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = (theme) => ({
  root: {
    width: "100%",
  },
  details: {
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "2px 2px 4px lightgrey",
    borderRadius: "15px",
    border:"1px solid #C3E5F0",
    marginTop: "-76px",
    paddingTop: "56px",
    width: "183px",
    display: "block",
    marginLeft: "auto",
    marginRight:"auto",
    [theme.breakpoints.up('sm')]: {
      marginLeft: "23px",
      marginRight:"0px",
    },

  },
  image: {
    width: "198px",
    display: "block",
    marginLeft: "auto",
    marginRight:"auto",
    [theme.breakpoints.up('sm')]: {
      display: "block",
      marginLeft: "0px",
      marginRight:"0px",
    },
  },
  accordion: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  btnAddToBasket: {
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderRadius: "18px",
    padding: "3px 12px",
    borderWidth: "0px",
    border: "1px solid #C3E5F0",
    outline: "navajowhite",
    boxShadow: "2px 2px 4px lightgrey",
    backgroundColor: "white",
    color: "#00527D",
    fontWeight: "500",
    fontSize: "14px",
    textTransform: "none",
  },
  checkboxIcon: {
    color: "#C3E5F0 !important",
    padding:"1px 2px 2px 9px",
  },
  checkboxLabel: {
    color: "#00527D",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "13px",
    fontWeight: "600",
    marginRight:"0px",
    "& .MuiTypography-body1": {
      color: "#00527D",
      fontFamily: '"Poppins", sans-serif',
      fontSize: "13px",
      fontWeight: "600",
    },
  },
  priceLabel: {
    color: "#00527D",
    fontFamily: '"Poppins", sans-serif',
    fontSize: "13px",
    fontWeight: "600",
  }
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
              <Grid container>
                <Grid item xs={8}>
                  <FormControlLabel
                    className={classes.checkboxLabel}
                    control={
                      <Checkbox
                        checked={this.state.checkedF}
                        onChange={handleChange}
                        name="checkedF"
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        className={classes.checkboxIcon}
                      />
                    }
                    label="Dry Clean"
                  />
                </Grid>
                <Grid item xs={4} align="right"> <label className={classes.priceLabel} htmlFor="">100 L.E</label> </Grid>

                <Grid item xs={8}>
                  <FormControlLabel
                    className={classes.checkboxLabel}
                    control={
                      <Checkbox
                        checked={this.state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        className={classes.checkboxIcon}
                      />
                    }
                    label="Wash"
                  />
                </Grid>
                <Grid item xs={4} align="right"> <label className={classes.priceLabel} htmlFor="">100 L.E</label> </Grid>

                <Grid item xs={8}>
                  <FormControlLabel
                    className={classes.checkboxLabel}
                    control={
                      <Checkbox
                        checked={this.state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<RadioButtonCheckedIcon />}
                        className={classes.checkboxIcon}
                      />
                    }
                    label="Iron"
                  />
                </Grid>
                <Grid item xs={4} align="right"> <label className={classes.priceLabel} htmlFor="">100 L.E</label> </Grid>

                <Button  className={classes.btnAddToBasket}>
                  Add to basket
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

