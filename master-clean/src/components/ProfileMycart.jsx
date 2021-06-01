import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import mycarticon from '../images/mycarticon.png';
import ordertshirt from '../images/ordertshirt.png';
import orderpullover from '../images/orderpullover.png';

const useStyles = theme => ({
    myCart:{
        width: "100%",
        border: "1px solid #CAE7F1",
        padding: "3px",
        borderRadius: "45px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        margin: "90px 0",
        [theme.breakpoints.up('sm')]: {
            padding: "26px",
        },
    },
    mycartIcon: {
        width: "5%",
        verticalAlign: "middle",
        borderStyle: "none",
        float:"left",
    },
    mycartText: {
        display: "inline-block",
        marginLeft: "15px",
        fontSize: "21px",
        fontWeight: "700",
        fontFamily: "'Poppins', sans-serif",
        color: "#00527D",
        textAlign: "left",
        float: "left",
        marginTop:"10px",
    },
    btnCart: {
        textAlign:"center",
        borderRadius: "10px",
        color: "#00527D",
        fontWeight: "bold",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "19px",
        border: "2px solid #C7E7F4",
        boxShadow: "none",
        paddingTop: "7px",
        paddingBottom: "7px",
        outline: "none",
        width: "100%",
        marginBottom: "10px",
        marginTop: "40px",
        [theme.breakpoints.up('sm')]: {
            width: "48%",
        },
    },
    productCart: {
        width: "100%",
        padding: "25px 0px",
        borderRadius: "20px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        [theme.breakpoints.up('sm')]: {
            padding: "59px 19px",
      },
    },
    col6Grid: {
        padding: "21px 0px",
        [theme.breakpoints.up('sm')]: {
            padding: "26px",
      },
    },
    orderImage: {
        width: "72%",
        display: "block",
        marginLeft: "auto",
        marginRight:"auto",
    },
    orderText1: {
        fontSize: "20px",
        fontWeight: "700",
        marginBottom: "1rem",
        fontFamily: "'Poppins', sans-serif",
    },
    orderText2: {
        fontSize: "20px",
        fontWeight: "300",
        fontFamily: "'Poppins', sans-serif",
       
    },
    margAuto: {
        marginTop:"auto",
    },
    cartItemInfo: {
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            textAlign:"left",
        },
    },
});

class ProfileMyCart extends Component {
  state = {};
    render() {
        const { classes } = this.props;
    return (
        <Paper className={classes.myCart}>
            <div>

            </div>
            <img className={classes.mycartIcon} src={mycarticon} alt="mycarticon" />
            <Typography align="left" className={classes.mycartText}>My Cart</Typography>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.col6Grid}>
                    <Paper className={classes.productCart}>
                        <Grid container>
                            <Grid item sm={5} xs={12}>
                                <img className={classes.orderImage} src={ordertshirt} alt="tshirt"/>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography className={classes.cartItemInfo}> 
                                    <span className={classes.orderText1}>Shirt <br/></span>
                                    <span>
                                        <span className={classes.orderText2}>Dry Clean <br/></span>
                                        <span className={classes.orderText2}>1 piece <br/></span>
                                    </span>
                            </Typography>
                            </Grid>
                            <Grid className={classes.margAuto} item sm={3} xs={12}>
                            <Typography className={classes.orderText1}>20.00 EGP</Typography>
                            </Grid>
                        </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} className={classes.col6Grid}>
                    <Paper className={classes.productCart}>
                    <Grid container>
                            <Grid item sm={5} xs={12}>
                                <img className={classes.orderImage} src={orderpullover} alt="pullover"/>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography className={classes.cartItemInfo}> 
                                    <span className={classes.orderText1}>Shirt <br/></span>
                                    <span>
                                        <span className={classes.orderText2}>Dry Clean <br/></span>
                                        <span className={classes.orderText2}>1 piece <br/></span>
                                    </span>
                            </Typography>
                            </Grid>
                            <Grid className={classes.margAuto} item sm={3} xs={12}>
                            <Typography className={classes.orderText1}>20.00 EGP</Typography>
                            </Grid>
                        </Grid>
            </Paper>
          </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Button  className={classes.btnCart} href="#outlined-buttons">
                        Go to cart
                    </Button>
                </Grid>
            </Grid>   
      </Paper>
    );
  }
}

export default withStyles(useStyles) (ProfileMyCart);
