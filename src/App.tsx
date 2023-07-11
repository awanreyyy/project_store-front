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
import SocialMediaSection from './Components/SocialMediaSection';


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
      <SocialMediaSection></SocialMediaSection>
       
    </div>
  );
}

export default App;
