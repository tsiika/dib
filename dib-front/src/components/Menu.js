import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import axios from 'axios';


/* Components */
import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';

/* Modules */
import Front from '../modules/Front';
import Dashboard from '../modules/Dashboard';
import Home from '../modules/Container';
import NoMatch from '../modules/404';


class Menu extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        current: 'home',
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/');
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    
    render() {
    return (
            <div>
                <ul className="menu">
                    <li><Link to="/" component={Front}> Home</Link></li>

                    <li><Link to="/dashboard" component={Dashboard}>Dashboard</Link></li>

                    <li><Link to="/create" component={Create}>Add Link</Link></li>

                    <li><Link to="/login" component={Login}>Login</Link></li>

                    <li><Link to="/register" component={Register}>Register</Link></li>

                    <li><Link to="/logout" component={Logout} onClick={this.logout}>Logout</Link></li>
                </ul>
            </div>
        );
    }
}

export default Menu;