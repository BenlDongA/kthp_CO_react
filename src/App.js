import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/banner/banner'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import './index.css'
import CartPage from './components/cart'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
         <Routes>
      <Route path="/" element={
        <>
          <Navbar />
        
        </>  
      } />
      
      <Route path="/cart" element={<CartPage />} />

    </Routes>
        <div className='zz'>
        <Hero />
        <HeadlineCards />
        <Food />
        
        </div>
    </>
    
  );
}

export default App;
