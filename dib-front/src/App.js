import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Logo from './assets/dib.png';
import './App.css';

import Edit from './components/Links/Edit';
import Create from './components/Links/Create';
import Show from './components/Links/Show';
import Dashboard from './modules/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={Logo}  />

        <h1 className="App-title">&copy; <a href="https://github.com/tsiika">Tsiika</a> 2018</h1>
        <h2>Täällä voi muokata linkkejä joskus</h2>
          <Link to="/dashboard" component={Dashboard}>Dashboard</Link>
          <hr/><br/><br/>

          <Route>
            <div>          
            
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/create' component={Create} />

            </div>
          </Route>



      </div>
      
    );
  }
}



export default App;
