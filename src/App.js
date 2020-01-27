// importing components from pages
// this is the main page of the application

import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/Cart'
import Default from './components/Default'
import Modal from './components/Modal'

function App() {
  return (
    // site structure
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/Cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
