import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';



class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        axios.post('/api/auth/register', {username, password})
            .then((result) => {
                this.props.history.push('/login')
            });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="container">
                <h1>Register</h1>
                <p>Registration service is not available!</p>
                    <form class="form-signin" onSubmit={this.onSubmit}>
                        <h2 class="form-signin-heading">Register</h2>
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" class="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
                            <label for="inputPassword" class="sr-only">Password</label>
                            <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    </form>
                
            </div>
        );
    }
}

export default Register;