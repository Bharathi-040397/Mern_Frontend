import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Home from './Home'
import Header from './Header'
import Gallery from './Gallery'
import Cart from './Cart'
import {getProducts} from '../redux/Action/Product'

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  
  
  return (
    <Router>
       <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Gallery}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
