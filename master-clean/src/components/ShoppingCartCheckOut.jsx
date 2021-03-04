import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const useStyles = theme => ({
  bold: { fontWeight: "700", },
  subtotal: {
    color: "#00527D",
    textAlign: "right",
    fontFamily:"Roboto,sans-serif",
    marginBottom:"10px",
  },
  subtotalPrice: {
    color: "#00527D",
    textAlign: "right",
    fontFamily: "Roboto,sans-serif",
    fontWeight:"700",
    marginBottom:"10px",
  },
  delivery: {
    color: "#F1B6B5",
    fontWeight: "bold",
    fontFamily: "Roboto,sans-serif",
    textAlign: "right",
    marginBottom:"10px",
  },
  hr: {
    float: "right",
    width: "68%",
    height: "2px",
    color:"lightgray",
  },
  total: {
    color: "#00527D",
    textAlign: "right",
    margin: "12px 0px",
    fontSize: "25px",
    fontFamily: "'Poppins', sans-serif",
  },
  checkoutBtn: {
    boxShadow: "2px 2px 4px lightgrey",
    marginTop: "20px",
    padding: "6px 25px",
    background: "white",
    color: "#00527D",
    fontSize: "18px",
    borderRadius: "14px",
    outline: "none",
    float: "right",
    [theme.breakpoints.up('sm')]: {
      fontSize: "20px",
    },
  },
  columnOne: {
    padding:"15px 0px 0px 48px",
  },
  columnTwo: {
    padding: "34px 0px",
    [theme.breakpoints.up('sm')]: {
      padding: "22px 10px",
    },
    [theme.breakpoints.up('md')]: {
      padding: "20px 22px",
    },
    [theme.breakpoints.up('lg')]: {
      padding: "16px 79px",
    },
  },
});
  class ShoppingCartCheckOut extends Component {

      render() { 
        const { classes } = this.props;
        return ( 
          <Grid container>
            <Grid item sm={6} xs={12} className={classes.columnOne}>
              <Typography align="left">
                <span className={classes.bold}>Estimated delivery time:</span>
                 2-3 working days after order.
              </Typography> 
            </Grid>
            <Grid item sm={6} xs={12} className={classes.columnTwo}>
          
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.subtotal}>SUBTOTAL</Typography>
                  <Typography className={classes.delivery}>DELIVERY</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.subtotalPrice}>71.97EGP</Typography>
                  <Typography className={classes.delivery}>15.00 EGP</Typography>
                </Grid>
              </Grid>
              <Divider className={classes.hr}/>
              <Grid container>
                <Grid item xs={6}>
                  <Typography className={classes.total}>TOTAL</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.total}>90.57 EGP</Typography>
                </Grid>
              </Grid>
              <Divider className={classes.hr}/>
              <Grid container>
                <Grid item xs={12}>
                  <Button className={classes.checkoutBtn}>Proceed to checkout</Button>
                </Grid>
              </Grid>

            </Grid>
         </Grid>
          

           );
      }
  }
   
export default withStyles(useStyles) (ShoppingCartCheckOut);
  
