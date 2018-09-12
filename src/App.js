import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css'

import Navigationbar from "./_components/Navigationbar/Navigationbar.js";
import RowCategory from "./_components/Navigationbar/rowCategory.jsx";
import Tcarousel from './_components/Navigationbar/Tcarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Navigationbar/>
          <RowCategory/>
          <Tcarousel/>
      </div>
    );
  }
}

export default App;
