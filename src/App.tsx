import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import SignupForm from './Components/SignupForm';
import ShopByCategory from './Components/ShopByCategory';
// import FlashSale from './Components/FlashSale';
import FlashSaleCategory from './Components/FlashSaleCategory';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <FlashSaleCategory></FlashSaleCategory>
      {/* <FlashSale></FlashSale> */}
      <ShopByCategory></ShopByCategory>
      <SignupForm></SignupForm>  
    </div>
  );
}

export default App;
