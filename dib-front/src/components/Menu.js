import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';

import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';

import Dashboard from '../modules/Dashboard';
import Home from '../modules/Home';
import NoMatch from '../modules/404';




class Menu extends Component {
    
    render() {
    return (
        <div>
            <ul>
                <li><Link to="/dashboard" component={Dashboard}>Dashboard</Link></li>
                <li><Link to="/create" component={Create}>Add Link</Link></li>
            </ul>

        </div>
    );
    }
}

export default Menu;