import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';


class Login extends Component {
    render() {
    return (
        <div className="container">
            <h1>Login</h1>
            <p>Login service is not available!</p>
            
            <form>
                <div className="form-group">
                    <input type="text" className="form-control form-st" name="email" placeholder="Email" /> 
                    <input type="password" className="form-control form-st" name="passwd" placeholder="Password"/> 
                    <button disabled class="btn btn-disabled">Login</button>
                </div>
            </form>
        </div>
    );
    }
}

export default Login;