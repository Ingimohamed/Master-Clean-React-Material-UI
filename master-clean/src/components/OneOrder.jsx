import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HeartCheckbox from 'react-heart-checkbox';
import { withStyles } from '@material-ui/core/styles';



const useStyles = theme => ({
    img: {
        width: "100%",
        padding:"23% 15%",
    },
    orderCountText: {
        fontSize: "20px",
        fontWeight: "500",
        fontFamily: "'Poppins', sans-serif",
        color:"#00527D",
    },
    centerVertical: {
        display: "block",
        marginTop: "auto",
        marginBottom: "auto",
    },
    spanText: {
        fontSize: "13px",
        textAlign: "center",
        display: "block",
        fontWeight: "500",
        fontFamily: "'Poppins', sans-serif",
        color:"#00527D",
    },
    deliveredBtn: {
        backgroundColor: "#C3E5F0",
        color: "#00527D!important",
        borderRadius: "7px",
        padding: "5px 14px",
        fontSize: "18px",
        fontWeight: "500",
        fontFamily: "'Poppins', sans-serif",
        margin:"28px 0px",
        [theme.breakpoints.up('sm')]: {
            margin: "0",
            fontSize: "18px",
        },
        [theme.breakpoints.up('md')]: {
            margin: "0",
            fontSize: "20px",
        },
    },
});

class OneOrder extends Component {
 
    state = {
        orderImage:this.props.orderImage,
        orderCount:this.props.orderCount,
        orderPrice:this.props.orderPrice,
        delivered: this.props.delivered,
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       checked: false
    //     };
    //   }
      onClick = (event, props) => {
        this.setState({ checked: !this.state.checked });
      }
    render() { 
        const { checked } = this.state;
        const { classes } = this.props;
        return ( 
            <Grid container>
            <Grid item sm={2} xs={12}>
                <img className={classes.img} src={this.state.orderImage} alt="T-shirt"/>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.centerVertical}>
                <Typography className={classes.orderCountText}>{this.state.orderCount} shirts</Typography>
            </Grid>
            <Grid item sm={2} xs={12} className={classes.centerVertical}>
                    <Typography className={classes.orderCountText}>{this.state.orderPrice}
                        <br />
                        <span className={classes.spanText}>(20 each)</span>
                    </Typography>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.centerVertical}>
                    <Button disabled className={classes.deliveredBtn}>
                    {
                        this.state.delivered == true ?
                        "Delivered" : "Not Delivered"
                      } 
                    </Button>
            </Grid>
            <Grid item sm={1} xs={12} className={classes.centerVertical}>
            <HeartCheckbox checked={checked} onClick={this.onClick} />
            </Grid>
        </Grid>
         );
    }
}
 
export default withStyles(useStyles) (OneOrder);