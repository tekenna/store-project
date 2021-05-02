import React, { Component } from 'react'
import {Switch, Route} from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/footer"
import ProductList from "./Components/ProductList"
import Details from "./Components/Details"
import Cart from "./Components/Cart"
import Default from "./Components/Default"
import Pop from "./Components/Pop"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList}  />
        
          <Route path="/details" component={Details}  />
        
          <Route path="/carts" component={Cart}  />
        
          <Route component={Default}  />
        </Switch>
        <Pop />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
