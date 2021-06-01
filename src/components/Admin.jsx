import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from '../images/ordertshirt.png';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, address, order, orderName, delivery, price) {
  return { id, name, address, order, orderName, delivery, price };
}

const rows = [
    createData('1234566', 'Ahmed', 'Nasr city', <img src={image} alt=""/>,'T-shirt', 'Delivered',"100$"),
  createData('9825232', 'Mark','Nasr city', <img src={image} alt=""/>,'T-shirt', 'Delivered',"100$"),
  createData('9162432', 'Bill','Nasr city', <img src={image} alt=""/>,'T-shirt', 'Delivered',"100$"),
  createData('6543287', 'Tom','Nasr city', <img src={image} alt=""/>,'T-shirt', 'Delivered',"100$"),
  createData('9764215', 'Max', 'Nasr city', <img src={image} alt=""/>,'T-shirt', 'Delivered',"100$"),
];

const useStyles = makeStyles({
    container: {
        padding:"5rem",
    },
    tableHead: {
        background:"#003455",
    },
    img: {
        '& img': {
           width:"27%",
       },
    },
  table: {
    minWidth: 700,
  },
});

export default function Admin() {
  const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.tableHead}>ID</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Name</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Address</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Order</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Order Name</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Delivery</StyledTableCell>
            <StyledTableCell className={classes.tableHead} align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
            <StyledTableCell className={classes.img} align="right">{row.order}</StyledTableCell>
            <StyledTableCell align="right">{row.orderName}</StyledTableCell>
            <StyledTableCell align="right">{row.delivery}</StyledTableCell>
            <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Grid>
            </Grid>
      </div>
  
  );
}
//this page not used -> should be connected with backend  