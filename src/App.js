import React, { Component } from 'react';
import './App.css';
import TopSellingBooks from './components/TopSelling/TopSellingBooks';
import TopSellingClothing from './components/TopSelling/TopSellingClothing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopSellingBooks />
        <TopSellingClothing />
      </div>
    );
  }
}

export default App;
