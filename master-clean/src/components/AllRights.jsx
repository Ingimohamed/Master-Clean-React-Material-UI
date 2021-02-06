import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    copyrightText: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "#00527D",
        marginBottom: "1rem",
        fontFamily:"Roboto,sans-serif",
    },
    hr: {
        marginTop: "-7px",
        marginBottom: "9px",
        width: "41%",
        display: "block",
        marginLeft: "auto",
        marginRight:"auto",
    },
    mailText: {
        fontSize: "15px",
        opacity: "38%",
        color:"#00527D",
    },
});

class AllRights extends Component {
  state = {};
    render() {
        const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.copyrightText}>Master clean © 2019 | All Rights Reserved</Typography>
            <Divider className={classes.hr}/>
        <Typography className={classes.mailText}>logged in as : Omar.khalid@gmail.com</Typography>
      </div>
    );
  }
}

export default withStyles(useStyles) (AllRights);
