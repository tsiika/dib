import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';

import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';

import Front from '../modules/Front';
import Dashboard from '../modules/Dashboard';
import Home from '../modules/Container';
import NoMatch from '../modules/404';




class Menu extends Component {
    
    render() {
    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light navstyle">
        <a class="navbar-brand" href="#">dib</a>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" component={Front} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/dashboard" component={Dashboard} className="nav-link">Dashboard</Link></li>
                <li className="nav-item"><Link to="/create" component={Create} className="nav-link">Add Link</Link></li>
            </ul>
        </nav>

        </div>
    );
    }
}

export default Menu;