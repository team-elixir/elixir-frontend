import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css'

import RowCategory from "./_components/Navigationbar/RowCategory.jsx";
import Tcarousel from './_components/Navigationbar/Tcarousel';
import ProductSlider from './_components/Navigationbar/ProductSlider';
import Footer from './_components/Navigationbar/footer';
import Header from './_components/Navigationbar/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <RowCategory/>
          {/*Top carousel-Yu*/}
          <Tcarousel/>
          <ProductSlider/>
          <ProductSlider/>
          {/*Footer-Yu*/}
          <Footer/>
      </div>
    );
  }
}

export default App;
