import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) =>  {
        e.preventDefault();

        const { username, password } = this.state;

        axios.post('/api/auth/login', {username, password})
            .then((result) => {
                localStorage.setItem('jwtToken', result.data.token);
                this.setState({ message: ''});
                this.props.history.push('/')
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.setState({ message: 'Login failed, username and password dont match!'});
                }
            });
    }

    render() {
        const { username, password, message } = this.state;
        return (
            <div className="container">
                <form class="form-signin" onSubmit={this.onSubmit}>
                    <h2 class="form-signin-heading">Login</h2>
                    <p>Login service is not available!</p>
                    
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                    <button class="btn btn-primary" type="submit">Login</button>
                <p>
                    Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
                </p>

                { message !== '' &&
                    <div class="alert alert-warning alert-dismissible" role="alert">
                        { message }
                    </div> }
                </form>
            </div>
        );
    }
}

export default Login;