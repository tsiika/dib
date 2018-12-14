import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//@TODO     WIP
//@desc     Server side validation is under way. Implimentation for this form coming.

//import '../styles/login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }
    onChange = e => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        axios
            .post("/api/auth/login", { username, password })
            .then(result => {
                localStorage.setItem("jwtToken", result.data.token);
                this.setState({ message: "" });
                this.props.history.push("/dashboard");
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.setState({
                        message: "Login failed, username and password invalid!"
                    });
                }
            });
    };

    render() {
        const { username, password, message } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <h1>Login</h1>

                    <input
                        type="email"
                        placeholder="Email"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        className="input-style"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        className="input-style"
                        required
                    />
                    <br />
                    <button
                        type="primary"
                        htmlType="submit"
                        className="input-btn"
                        block
                    >
                        Login
                    </button>
                    <p className="lt">
                        Not a member? <Link to="/register"> Register here</Link>
                    </p>

                    {message !== "" && (
                        <div
                            class="alert alert-warning alert-dismissible"
                            role="alert"
                        >
                            {message}
                        </div>
                    )}
                </form>
            </div>
        );
    }
}

export default Login;
