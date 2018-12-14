import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//@TODO     WIP
//@desc     As the server side validation is implimented, work this menu accordingly where you can get unauthorized and etc.

/* Components */
import Edit from "../components/Links/Edit";
import Create from "../components/Links/Create";
import Show from "../components/Links/Show";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";
import Register from "../components/Auth/Register";

/* Modules */
import Front from "../modules/Front";
import Dashboard from "../modules/Dashboard";
import Home from "../modules/Container";
import NoMatch from "../modules/404";

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="menu">
                    <li>
                        <Link to="/" component={Front}>
                            {" "}
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard" component={Dashboard}>
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/create" component={Create}>
                            Add Link
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" component={Login}>
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link to="/register" component={Register}>
                            Register
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/logout"
                            component={Logout}
                            onClick={this.logout}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;
