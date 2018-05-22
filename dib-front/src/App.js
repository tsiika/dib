import React, { Component } from 'react';
import Logo from './assets/dib.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={Logo}  />
        <h1 className="App-title">&copy; <a href="https://github.com/tsiika">Tsiika</a> 2018</h1>
      </div>
    );
  }
}

export default App;
