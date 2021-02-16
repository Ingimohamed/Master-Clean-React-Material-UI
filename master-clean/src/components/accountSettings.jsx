import React, { Component,useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import AllRights from './AllRights';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import addingaddress from '../images/addingaddress.png';
import IconButton from '@material-ui/core/IconButton';
import UpdateAccountInfo from './accountSettingsModel1';
import UpdatePhoneNumber from './accountSettingsModel2';
import UpdatePassword from './accountSettingsModel3';


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
        borderRadius: "16px",
        marginBottom: "26px",
    },
    marginSpace: {
        margin:"15% 0",
    },
    titles: {
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif", 
        fontWeight: "500",
        marginBottom: "1.5rem!important",
        marginTop: "0",
        fontSize: "1.25rem",
        textAlign:"left",
    },
    imgIcon: {
        width: "55%",
        float:"right",
    },
    iconButton: {
        float:"right",
    },
    accountInfo:{
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif", 
        fontSize:"15px",
    },
    subTitles:{
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "15px",
        fontWeight:"700",
    },
    phoneNumber: {
        color: "#00527D",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "18px",
    },
    inputPassword: {
        border: "1px solid #BFE5F4",
        borderRadius: "10px",
        width: "100%",
        outline:"none",
    },
});
class AccountSetting extends Component {
    state = {  }
    render() { 
        const { classes } = this.props;
        return ( 
            <Container className={classes.container}>
                <Grid container className={classes.paddLeft}>
                    <Grid item md={4} xs={6}>
                        <Typography align="left" className={classes.orderTitlesText}>Account Settings</Typography>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Typography align="center" className={classes.orderTitlesText}>Omar Khaled</Typography>
                    </Grid>
                    <Grid item md={4} xs={10}>
                        <Button className={classes.backToProfileBtn} href="/profile">Back to dashboard</Button>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid className={classes.firstCol} item md={6} xs={12}>
                        <div className={classes.updateInfoBox}>
                            <Typography class={classes.titles}>
                               Account Information 
                                {/* <IconButton className={classes.iconButton}>
                                    <img className={classes.imgIcon} src={addingaddress} alt="addingaddress"/>     
                                </IconButton> */}
                                <UpdateAccountInfo />
                          
                            </Typography>
                            <Typography className={classes.subTitles} align="left" variant="body2" component="p">
                                First Name
                            </Typography>
                            <Typography className={classes.accountInfo} align="left" variant="body2" component="p">
                                Omar
                            </Typography>
                            <Typography className={classes.subTitles} align="left" variant="body2" component="p">
                                Last Name
                            </Typography>
                            <Typography className={classes.accountInfo} align="left" variant="body2" component="p">
                                Khaled
                            </Typography>
                            <Typography className={classes.subTitles} align="left" variant="body2" component="p">
                                Gender
                            </Typography>
                            <Typography className={classes.accountInfo} align="left" variant="body2" component="p">
                                Male
                            </Typography>
                            <Typography className={classes.subTitles} align="left" variant="body2" component="p">
                                Email
                            </Typography>
                            <Typography className={classes.accountInfo} align="left" variant="body2" component="p">
                               omar.khaled@gmail.com
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={classes.secCol} item md={6} xs={12}>
                        <div className={classes.updateInfoBox}>
                        <Typography class={classes.titles}>
                                Phone Number
                         {/* <IconButton className={classes.iconButton}>     
                            <img className={classes.imgIcon}  src={addingaddress} alt="addingaddress" />     
                          </IconButton> */}
                                <UpdatePhoneNumber/>
                            </Typography>
                            <Typography  align="left" variant="body2" component="p">
                               <a className={classes.phoneNumber}  href="tel:201141987688">+201141987688</a>
                            </Typography>
                        </div>
                        <div className={classes.updateInfoBox}>
                        <Typography class={classes.titles}>
                                Password
                        {/* <IconButton className={classes.iconButton}>      
                            <img className={classes.imgIcon} type="button" src={addingaddress} alt="addingaddress" />     
                          </IconButton> */}
                                <UpdatePassword />
                            </Typography>
                            <input className={classes.inputPassword} type="text"/>
                        </div>
                    </Grid>
                </Grid>

                <div className={classes.marginSpace}></div>
                <AllRights />
                </Container>
         );
    }
}
 
export default withStyles(useStyles) (AccountSetting);