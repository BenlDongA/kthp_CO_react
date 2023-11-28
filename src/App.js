import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/banner/banner'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import './index.css'

function App() {
  return (
    <div className='App'>
        <Navbar />
        <div className='zz'>
        <Hero />
        <HeadlineCards />
        <Food />
        </div>
        

    </div>
  );
}

export default App;
