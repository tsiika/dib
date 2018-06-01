import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';


class Register extends Component {
    render() {
    return (
        <div className="container">
            <h1>Register</h1>
            <p>Registration service is not available!</p>

            <form>
                <div className="form-group">
                    <input type="text" className="form-control form-st" name="email" placeholder="Email" /> 
                    <input type="password" className="form-control form-st" name="passwd" placeholder="Password"/> 
                    <input type="password" className="form-control form-st" name="passwdC" placeholder="Confirm password"/> 
                    <button disabled class="btn btn-disabled">Register</button>
                </div>
            </form>
        </div>
    );
    }
}

export default Register;