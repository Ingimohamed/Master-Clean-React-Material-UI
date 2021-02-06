import React, { Component } from 'react';
import Counters from './counters';
import ItemsNumber from './itemsNumber';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({});
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
        
          return ( 
            <div>
            <ItemsNumber totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={ this.handleDelete}/>
              </main>
         </div>
           );
      }
  }
   
export default ShoppingCart;
  
