import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../node_modules/auth0-js/build/auth0.js";

import Logo from "./assets/dib.png";
import "./App.scss";

import $ from "jquery";
import "foundation-sites";

/* Components */

import Edit from "./components/Links/Edit";
import Create from "./components/Links/Create";
import Show from "./components/Links/Show";
import Menu from "./components/Menu";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile/Profile";
import Footer from "./modules/Footer";

/* Modules*/

import Front from "./modules/Front";
import Dashboard from "./modules/Dashboard";
/*import Container from './modules/Container';*/

import NoMatch from "./modules/404";

class App extends Component {
    componentDidMount() {
        $(document).foundation();
    }

    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Front} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:_id" component={Edit} />
                    <Route path="/show/:_id" component={Show} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/logout" component={Logout} />

                    <Route path="*" component={NoMatch} />
                </Switch>

                <Footer>
                    &#169;{new Date().getFullYear()} dib,{" "}
                    <a href="https://github.com/tsiika">Tommi Siik</a>
                </Footer>
            </div>
        );
    }
}

export default App;
