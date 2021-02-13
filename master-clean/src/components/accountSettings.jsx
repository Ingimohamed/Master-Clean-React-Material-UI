import React, { Component,useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AllRights from './AllRights';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';


const useStyles = theme => ({
    container: {
        marginTop: "3rem",
        padding: "3rem 5rem",
    },
    paddLeft: {
        paddingLeft: "1.6rem",
        margin:"2rem 0",
    },
    orderTitlesText: {
        fontSize: "20px",
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
    firstCol:{padding:"0px 21px 0px 34px",},
    secCol: { padding: "0px 14px 0px 23px", },
    updateInfoBox: {
        width: "100%",
        border: "1px solid #CAE7F1",
        padding: "18px 19px 29px 23px",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
        fontSize: "15px",
        borderRadius:"16px",
    },
    marginSpace: {
        margin:"15% 0",
    },
});
class AccountSetting extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <Container className={classes.container}>
                <Grid container className={classes.paddLeft}>
                    <Grid item xs={4}>
                        <Typography align="left" className={classes.orderTitlesText}>Account Settings</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="center" className={classes.orderTitlesText}>Omar Khaled</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button className={classes.backToProfileBtn} href="/profile">Back to dashboard</Button>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid className={classes.firstCol} item md={6} xs={12}>
                        <div className={classes.updateInfoBox}></div>
                    </Grid>
                    <Grid className={classes.secCol} item md={6} xs={12}>
                        <div className={classes.updateInfoBox}></div>
                        <div className={classes.updateInfoBox}></div>
                    </Grid>
                </Grid>

                <div className={classes.marginSpace}></div>
                <AllRights />
                </Container>
         );
    }
}
 
export default withStyles(useStyles) (AccountSetting);