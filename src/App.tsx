import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import SignupForm from './Components/SignupForm';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <SignupForm></SignupForm>
    </div>
  );
}

export default App;
