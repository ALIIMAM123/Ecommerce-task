
import React from 'react' ;
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Payment from './pages/PaymentPage';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const App = () => {
  // let user = false;
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        
         <Route path = "/products/:category">
          <ProductList />
        </Route>

         
         <Route path = "/product/:id">
          <Product />
        </Route>

         <Route path = "/cart">
          <Cart />
        </Route>

        
        <Route path="/login">
          {user ? <Redirect to = "/"  />:  <Login />}
          {/* <Login /> */}
        </Route>

        <Route path="/register">
             {user ? <Redirect to = "/"  />:  <Register />}
          <Register />
        </Route>

         <Route path="/payment">
           <Payment />
        </Route>


      </Switch>
  </Router>
  )
  {/* <Register/>
  <Login/>
  <Home/>
  <Product/>
  <ProductList/>
  <Cart/> */}
  

  
  
};

export default App;
