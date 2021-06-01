import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AllRights from './AllRights';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import telIcon from '../images/telIcon.png';
import NewAddress from './NewAddress';
import AddNewAddressModel from './AddNewAddressModel';
import EmptyAddress from './EmptyAddress';

const useStyles = theme => ({
    itemCard: {
        border: "1px solid #CAE7F1",
        width:"102%",
        padding:"13px 11px",
        marginTop: "1.5rem",
        borderRadius: "45px",
        boxShadow:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important",
        [theme.breakpoints.up('sm')]: {
            padding: "26px",
        },
    }, 
    container: {
        marginTop: "0rem",
        padding: "1rem 1rem",
        [theme.breakpoints.up('sm')]: {
            marginTop: "1rem",
            padding: "1rem 1.5rem",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "3rem",
            padding: "3rem 5rem",
        },
    },
    orderTitlesTextLeft: {
        fontSize: "20px",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight: "700",
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            textAlign: "left",
        },
    },
    orderTitlesTextCenter: {
        fontSize: "20px",
        fontFamily: "'Poppins', sans-serif", 
        color: "#00527D",
        fontWeight: "700",
        textAlign:"center",
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
        paddingLeft: "1.6rem",
        margin:"2rem 0",
    },
    paddLeft2: {
        paddingLeft: "1.6rem",
        margin:"2rem 0",
    },
    telIcon: {
        marginLeft: "0px",
        marginBottom: "2px",
        width: "4%",
        display: "inline-block",
        verticalAlign:"middle",
    },
    marginGrids: {
        marginBottom: "27px",
        [theme.breakpoints.up('sm')]: {
            marginBottom: "20px",
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: "0px",
        },
    },
});

class AddressBook extends Component {
    state = {}
  
    render() {
        const { classes } = this.props;
       
        return ( 
            <Container className={classes.container}>
                <Grid container className={classes.paddLeft}>
                    <Grid item sm={4} xs={12}>
                        <Typography className={classes.orderTitlesTextLeft}>Address book</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography  className={classes.orderTitlesTextCenter}>Omar Khaled</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Button className={classes.backToProfileBtn} href="/profile">Back to dashboard</Button>
                    </Grid>
                </Grid>
                <div className={classes.itemCard}>
                    <Grid container className={classes.infoRow}>
                        <Grid item sm={5} xs={12}>
                            <Typography className={classes.infoTitles}>
                                Name<br />
                               <span className={classes.infoAddress}>Omar Khaled</span> 
                                </Typography>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography className={classes.infoTitles}>
                                Phone <br />
                                <span className={classes.infoAddress}>+201141987688 <img className={classes.telIcon} src={telIcon} alt="telicon"/></span>
                                </Typography>
                        </Grid>
                        <Grid item sm={1} xs={12}>
                            <Typography className={classes.infoTitles}>
                                Region <br />
                                <span className={classes.infoAddress}>Egypt</span>
                                </Typography>
                        </Grid>
                    </Grid>
                </div>

                <Grid container className={classes.paddLeft2}>
                    <Grid item sm={6} xs={12}>
                        <Typography  className={classes.orderTitlesTextLeft}>My Addresses</Typography>
                    </Grid>
                   
                    <Grid item sm={6} xs={12}>
                       <AddNewAddressModel/>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid className={classes.marginGrids} item md={4} sm={6} xs={12}>
                        <NewAddress />
                    </Grid>
                    <Grid className={classes.marginGrids} item md={4} sm={6} xs={12}>
                        <EmptyAddress />
                    </Grid>
                    <Grid className={classes.marginGrids} item md={4} sm={6} xs={12}>
                        <EmptyAddress />
                    </Grid>
                </Grid>

                <div className={classes.marginSpace}></div>
                <AllRights />
            </Container>
         );
    }
}
 
export default withStyles(useStyles)(AddressBook);