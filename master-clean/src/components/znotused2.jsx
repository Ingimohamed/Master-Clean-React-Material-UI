import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
    none: {
        display: "none",
        background: "transparent",
        PointerEvent:"none",
},
});

class ConfirmBtn extends Component {
  state = {};
    render() {
        const { classes } = this.props;
    return <div className={classes.none}></div>;
  }
}

export default withStyles(useStyles) (ConfirmBtn);
