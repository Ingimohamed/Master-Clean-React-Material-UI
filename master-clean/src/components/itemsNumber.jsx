import React from "react";
import Typography from '@material-ui/core/Typography';
//Stateless Functional Component
const ItemsNumber = ({totalCounters}) => {

    return (
        <Typography> {totalCounters}</Typography>
      );

 };


export default ItemsNumber;
