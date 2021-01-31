import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PrimarySearchAppBar from './components/navbar';
import StickyFooter from './components/footer';
import Order from './components/Order';
import Contactus from './components/Contactus';
import Profile from './components/profile';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div className="content">
        <Switch>
          <Route path="/Order" component={ Order } />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/" component={ Home } />
        </Switch>
      </div>
        
      <StickyFooter />
      
    </div>
  );
}

export default App;
