import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';


import Logo from '../assets/dib.png';
import '../App.css';

import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';
import Menu from '../components/Menu';

import Dashboard from './Dashboard';



class Home extends Component {
    render() {
    return (
        <div>
        <Switch>
                <Route exact path='/' component={Home} />          
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/create' component={Create} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/show/:id' component={Show} />
        </Switch>
        </div>
    );
    }
}



export default Home;
