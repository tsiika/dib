import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Logo from './assets/dib.png';
import './App.css';

import Edit from './components/Links/Edit';
import Create from './components/Links/Create';
import Show from './components/Links/Show';
import Dashboard from './modules/Dashboard';

import Menu from './components/Menu';
import Home from './modules/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <Home />
      </div>
      
    );
  }
}



export default App;
