import React from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProdustsContextProvider from './Global/ProdustsContext'
import CartContextProvider from './Global/CartContext'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <ProdustsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/cart' exact component={Cart} />
            <Redirect to='/' />
          </Switch>
        </CartContextProvider>
      </ProdustsContextProvider>
    </>
  )
}

export default App
