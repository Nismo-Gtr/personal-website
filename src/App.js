import React, { Component } from 'react';
// import './App.css';
import NavBar from './components/NavBar/NavBar';
import Body from "./components/body/body";
// import Carousel from './components/body/slider';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Body />
      </div>

    );
  }
}

export default App;
