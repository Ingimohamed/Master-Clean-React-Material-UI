import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import item1 from '../images/item1.png';

const useStyles = theme => ({
  itemCard: {
    border: "1px solid #CAE7F1",
    padding: "26px",
    marginTop: "3rem",
    borderRadius: "25px",
    boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
  },
  btnOfArrows: {
    border: "none",
    background: "none",
    outline:"none",
  },
  DeleteArrow: {
    marginRight: "auto",
    display:"block",
  },
  Arrows: {
    color: "#00527D",
    fontSize:"26px",
  },
  itemTitles: {
    textAlign: "center",
    paddingBottom: "15px",
    marginBottom: "15px",
    color: "#00527D",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontSize:"1rem",
  },
  price: {
    fontWeight: "500",
    textAlign: "center",
    paddingBottom: "15px",
    marginBottom: "15px",
    color: "#00527D",
    fontFamily: "'Poppins', sans-serif",
    fontSize:"1rem",
  },
  center: {
    display: "block",
    marginRight: "auto",
    marginLeft:"auto",
  },
  descriPriceText: {
    color: "#00527D",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    fontSize:"1rem",
  },
  centerVertical: {
    marginTop: "auto",
    marginBottom:"auto",
  },
});

class Counter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.itemCard}>
        <Grid container>
          <Grid item xs={12}>
              <IconButton
                className={classes.DeleteArrow}
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
              <ClearIcon className={classes.Arrows}/>
              </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <Typography className={classes.itemTitles}>ITEM</Typography>
                 <Grid container>
                    <Grid item className={classes.center}> <img src={item1} alt="item"/></Grid>
                  </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.itemTitles}>DESCRIPTION</Typography>
            <Grid container>
              <Grid item className={classes.center}>
                <Typography className={classes.descriPriceText}>D(Dry clean)</Typography>
                    </Grid>
                  </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.itemTitles}>QUANTITY</Typography> 
                <Grid container>
                <Grid item xs={4}>
                  <IconButton
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className={classes.btnOfArrows}
                        disabled={this.props.counter.value === 0 ? "disabled" : ""}
                      >
                   <ArrowBackIosOutlinedIcon className={classes.Arrows} />
                      </IconButton>
                </Grid>
                <Grid item xs={4} className={classes.centerVertical}><span className={this.getBadgeClasses()}>{this.formatvalue()}</span></Grid>
                <Grid item xs={4}>
                      <IconButton
                      onClick={() => this.props.onIncrement(this.props.counter)}
                      className={classes.btnOfArrows}
                    >
                      <ArrowForwardIosOutlinedIcon className={classes.Arrows} />
                    </IconButton>
                </Grid>
                </Grid>
            
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.price}>PRICE</Typography>
                  <Grid container>
              <Grid item className={classes.center}>
                <Typography className={classes.descriPriceText}>12.99 EGP</Typography>
                    </Grid>
                  </Grid>
            </Grid>
       </Grid>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}

export default withStyles(useStyles) (Counter);
