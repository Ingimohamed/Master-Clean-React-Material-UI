import React from "react";
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Typography: {
    color: "#00527D",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    fontSize:"1rem",
  },
}));
//Stateless Functional Component
const ItemsNumber = ({ totalCounters }) => {
  const classes = useStyles();
  //return  totalCounters > 1 ? totalCounters + "Items" : totalCounters + "Item";
    return (
      <Typography className={classes.Typography}>
        {
          totalCounters > 1 ?
          totalCounters+" Items" : totalCounters+" Item" 
      } 
     </Typography>
      );

 };


export default ItemsNumber;
