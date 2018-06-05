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

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/');
    }
    
    render() {
    return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navstyle">
                    <div className="navbar w-100 order-1 order-md-0 ">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/" component={Front} className="nav-link">Home</Link></li>
                                <li className="nav-item"><Link to="/dashboard" component={Dashboard} className="nav-link">Dashboard</Link></li>
                                <li className="nav-item"><Link to="/create" component={Create} className="nav-link">Add Link</Link></li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand mx-auto" href="/">dib</a>
                    </div>
                    <div className="navbar w-100 order-3 ">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="/login" component={Login} className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to="/register" component={Register} className="nav-link">Register</Link></li>
                        <li className="nav-item">{ localStorage.getItem('jwtToken') &&
                        <Link to="/logout" className="nav-link" component={Logout} onClick={this.logout}>Logout</Link>
                            }</li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;