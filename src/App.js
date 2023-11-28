// App.jsx
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/banner/banner';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import './index.css';
import { CartProvider } from './components/CartContext';
import CartPage from './components/cart';
import { Routes, Route } from 'react-router-dom';
import Footerr from './components/footer';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<div>
          <Navbar />
          <div className='zz'>
            <Hero />
            <HeadlineCards />
            <Food />
          </div>
          <Footerr />
        </div>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
