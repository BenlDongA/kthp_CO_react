import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/banner/banner'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'


function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />

    </div>
  );
}

export default App;
