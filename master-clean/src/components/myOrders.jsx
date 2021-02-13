import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AllRights from './AllRights';
import Container from '@material-ui/core/Container';
import orderTshirt2 from '../images/orderTshirt2.png';
import orderpullover2 from '../images/orderpullover2.png';
import { Typography } from '@material-ui/core';
import OneOrder from './OneOrder';
import telIcon from '../images/telIcon.png';


const useStyles = theme => ({
    itemCard: {
        border: "1px solid #CAE7F1",
        width:"102%",
        padding: "26px",
        marginTop: "1.5rem",
        borderRadius: "45px",
        boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
    }, 
    container: {
        marginTop: "3rem",
        padding: "3rem 5rem",
    },
    orderTitlesText: {
        fontSize: "20px",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight:"700",
    },
    orderNo: {
        fontSize: "1rem",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight:"700",
    },
    backToProfileBtn: {
        boxShadow: "2px 2px 4px lightgrey",
        float: "right",
        padding: "6px 25px",
        background: "white",
        color: "#00527D",
        fontSize: "20px",
        borderRadius: "14px",
        outline: "none",
        textTransform:"none",
    },
    orderNoRow: {
        padding: "1.5rem 1.4rem 0.5rem 1.4rem",
    },
    infoRow: {
        padding: "0.5rem 1.5rem",
    },
    hr: {
        backgroundColor: "#C2E5F1",
        width: "96%",
        margin:"auto",
    },
    infoTitles: {
        fontSize: "1.25rem",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight: "700",
        textAlign:"left",
    },
    infoAddress: {
        fontSize: "1rem",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight: "300",
        textAlign:"left",
    },
    infophone: {
        fontSize: "1rem",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight: "300",
        textAlign: "left",
        textDecoration:"none",
    },
    marginSpace: {
        margin:"25% 0",
    },
    paddLeft: {
        paddingLeft:"1.6rem",
    },
    telIcon: {
        marginLeft: "0px",
        marginBottom: "2px",
        width: "4%",
        display: "inline-block",
        verticalAlign:"middle",
    },
});


class MyOrders extends Component {
    state = { 
        orders: [
            {
                orderImage: orderTshirt2,
                orderCount: 4,
                orderPrice: "100.00 EGP",
                delivered: false,
            }, 
            {
                orderImage: orderpullover2,
                orderCount: 2,
                orderPrice: "50.00 EGP",
                delivered: true,
            }, 
        ]
    }
    
    
    render() { 
        const { classes } = this.props;
        return ( 
            <Container className={classes.container}>
                <Grid container className={classes.paddLeft}>
                    <Grid item xs={4}>
                        <Typography align="left" className={classes.orderTitlesText}>Order history</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="center" className={classes.orderTitlesText}>Omar Khaled</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.backToProfileBtn} href="/profile">Back to dashboard</Button>
                    </Grid>
                </Grid>
                <div className={classes.itemCard}>
                    <Grid container className={classes.orderNoRow}>
                        <Grid item xs={6}>
                             <Typography className={classes.orderNo} align="left">Order No : EG79927065</Typography>
                        </Grid>
                        <Grid item xs={6}>
                             <Typography className={classes.orderNo} align="right">10 Sep 2019</Typography>
                        </Grid>
                    </Grid>
                    <Divider className={classes.hr}/>
                    <Grid container className={classes.infoRow}>
                        <Grid item xs={5}>
                            <Typography   className={classes.infoTitles}>Shipping Information1:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography  className={classes.infoTitles}>Billing Information2:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography  className={classes.infoTitles}>Payment Information3:</Typography>
                        </Grid>

                        <Grid item xs={5}>
                            <Typography className={classes.infoAddress}>Nasr City, Cairo Governorate</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.infoAddress}>Nasr City, Cairo Governorate</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.infoAddress}>Cash</Typography>
                        </Grid>

                        <Grid item xs={5}>
                            <Typography align="left">
                                <a className={classes.infophone} href="tel:+201141987688">+201141987688 <img className={classes.telIcon} src={telIcon} alt="telicon"/></a>
                            </Typography>
                            </Grid>
                        <Grid item xs={4}>
                            <Typography align="left">
                                <a className={classes.infophone} href="tel:+201141987688">+201141987688 <img className={classes.telIcon} src={telIcon} alt="telicon"/></a>
                            </Typography>
                         </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.infoAddress}>Grand total: 150.00 EGP</Typography>
                         </Grid>
                    </Grid>
                    <Divider className={classes.hr}/>

                    {this.state.orders.map((order) => (
                <OneOrder
                  key={order.id}
                orderImage={order.orderImage}
                orderCount={order.orderCount}
                orderPrice={order.orderPrice}
                delivered={order.delivered}
                />
                    ))}
                </div>

                <div className={classes.marginSpace}></div>
                <AllRights />
            </Container>
         );
    }
}
 
export default withStyles(useStyles) (MyOrders);