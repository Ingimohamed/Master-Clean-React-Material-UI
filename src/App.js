import React, { Component } from 'react';
import { Route,Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Home from './components/Home';
import PrimarySearchAppBar from './components/navbar';
import StickyFooter from './components/footer';
import Order from './components/Order';
import Contactus from './components/Contactus';
import Profile from './components/profile';
import ShoppingCart from './components/ShoppingCart';
import MyOrder from './components/myOrders';
import AddressBook from './components/addressBook';
import AccountSetting from './components/accountSettings';
import ContOrdering from './components/contOrdering';
import Admin from './components/Admin';
import './App.css';



class App extends Component {
  state = {};


  // componentDidMount() {
  //   try {
  //       const jwt = localStorage.getItem("token");
  //       const user = jwtDecode(jwt);
  //       this.setState({ user });
  //   } catch (error) {}
    
  // }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
      <PrimarySearchAppBar user={this.state.user} />
      <main className="content">
        <Switch>
          <Route path="/Order" component={ Order } />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ShoppingCart" component={ShoppingCart} />
          
          <Route path="/MyOrders" component={MyOrder} />
          <Route path="/AddressBook" component={AddressBook} />
          <Route path="/AccountSetting" component={AccountSetting} />

          <Route path="/ContOrdering" component={ContOrdering} />
          <Route path="/Admin" component={Admin} />
          <Route path="/" component={Home} />
           
        </Switch>
      </main>
        
      <StickyFooter />
      
      </React.Fragment>
    )
  }
}


export default App;
