import { useState } from 'react'
import './App.css'
import {Provider} from "react-redux"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx';
import cart_store from './store/cart_store.jsx'
import CartPage from './pages/CartPage.jsx'
import Signup from "./pages/Signup.jsx"

export const backendURL = "https://vegetables-backend.onrender.com";

function App() {

  return (
    <>
    <Provider store={cart_store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
      
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} /> 
          
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} /> 
      </Routes>  
    </BrowserRouter> 
    </Provider> 
    </>
  )
}

export default App
