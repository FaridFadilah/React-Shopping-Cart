import React from 'react'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import Menu from './Pages/Menu'
import './App.css'

export default function App() {
  const [cart, setCart] = React.useState([])

  const handleClick = (item) => {
    setCart([...cart, item])
    console.log(cart)
  }

  return (
    <React.Fragment>
      <Navbar/>
      <Hero setCart={setCart} Cart={cart}/>
      <Menu handleClick={handleClick}/>
      <Footer/>
    </React.Fragment>
  );
}