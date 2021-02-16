import React, { Component } from 'react';
import Counters from './counters';
import ItemsNumber from './itemsNumber';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AllRights from './AllRights';
import ShoppingCartCheckOut from './ShoppingCartCheckOut';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
  title: {
    fontWeight: "600",
    color: "#00527D",
    textAlign: "center",
    paddingBottom: "1.5rem",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.5rem",
    marginBottom:"20px",
  },
  paddingContainer: {
    padding:"3rem",
  },
  contOrderBtn: {
    boxShadow: "2px 2px 4px lightgrey",
    border: "1px solid #C3E5F0",
    marginTop: "20px",
    padding: "6px 25px",
    background: "white",
    fontSize: "20px",
    color: "#00527D",
    borderRadius: "14px",
    ouline: "none",
  },
  left: {
    marginLeft:"auto",
  },
});
  class ShoppingCart extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 10 },
            { id: 4, value: 0 }
        ]
    };
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters: counters });
      };
      
      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters: counters });
    };
    
    handleReset = () => {
        const counters = this.state.counters.map(c => { c.value = 0; return c; });
        this.setState({ counters: counters });
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
      };

      render() { 
        const { classes } = this.props;
        return ( 
          <Container className={classes.paddingContainer}>
            <div>
              <Typography className={classes.title} variant="h1" align="center">My basket</Typography>
              <ItemsNumber totalCounters={this.state.counters.filter(c => c.value > 0).length} />
              <Grid container>
                <Grid item className={classes.left}>
                  <Button className={classes.contOrderBtn} href="/ContOrdering">Continue Ordering</Button>
                </Grid>
              </Grid>
        <main className="container">
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={ this.handleDelete}/>
              </main>
            </div>
            <ShoppingCartCheckOut/>
            <AllRights />
          </Container>
          

           );
      }
  }
   
export default withStyles(useStyles) (ShoppingCart);
  
