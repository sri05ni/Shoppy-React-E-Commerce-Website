import React, { useState } from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './components/Header'
import {Container} from "react-bootstrap"
import Home from './components/Home'
import Footer from './components/Footer'
// import SignupScreen from './components/screens/SignupScreen'
// import LoginScreen from './components/screens/LoginScreen'
import Product from './components/Product'
import Cart from './components/Cart'




export default function App() {
  const [cart,setcart]=useState({})  
  function decrement(id){
    console.log("desc");
    
    setcart((prevcart)=>({
      ...prevcart,[id]: Math.max((prevcart[id] || 0) - 1, 0)
    }))
  }
  function increment(id){
      console.log("inc");
    setcart((prevcart)=>({
      ...prevcart,[id]: Math.max((prevcart[id] || 0) + 1, 0)
    }))
  }
  const cartcount=Object.values(cart).reduce((tot,qn)=>tot+qn,0)


  return (
    <>
    <BrowserRouter>
    <Header cartcount={cartcount}/>
    <main>
     
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/product' element={ <Container><Product  cart={cart}  increment={increment} decrement={decrement}/></Container>}/>
          <Route path='/cart' element={<Container><Cart cart={cart}/></Container>}/>
        </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    
    
    
    
    
    
    
    
    </>
  )
}
