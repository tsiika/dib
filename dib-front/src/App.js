import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/auth0-js/build/auth0.js';

import Logo from './assets/dib.png';
import './App.css';

/* Components */ 
import Edit from './components/Links/Edit';
import Create from './components/Links/Create';
import Show from './components/Links/Show';
import Menu from './components/Menu';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Profile from './components/Profile';


/* Modules*/

import Front from './modules/Front';
import Dashboard from './modules/Dashboard';
import Container from './modules/Container';
import Footer from './modules/Footer';

import NoMatch from './modules/404';


class App extends Component {
  render() {
    return (
      <div>

          <Menu />
          <Container />
          <Footer />

          <Switch>
            <Route exact path='/' component={Front} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/create' component={Create} />
            <Route path='/edit/:_id' component={Edit} />
            <Route path='/show/:_id' component={Show} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <Route path='/logout' component={Logout} />

            <Route path="*" component={NoMatch} />
          </Switch>
      </div>
      

    );
  }
}



export default App;
