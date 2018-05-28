import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Logo from './assets/dib.png';
import './App.css';

import Edit from './components/Links/Edit';
import Create from './components/Links/Create';
import Show from './components/Links/Show';
import Menu from './components/Menu';

import Front from './modules/Front';
import Dashboard from './modules/Dashboard';
import Container from './modules/Container';

import NoMatch from './modules/404';


class App extends Component {
  render() {
    return (
      <div>

          <Menu />
          <Container />

          <Switch>
            <Route exact path='/' component={Front} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/create' component={Create} />
            <Route path='/edit/:_id' component={Edit} />
            <Route path='/show/:_id' component={Show} />

            <Route path="*" component={NoMatch} />
          </Switch>
      </div>
      

    );
  }
}



export default App;
