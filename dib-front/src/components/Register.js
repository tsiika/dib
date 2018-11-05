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
                <form onSubmit={this.onSubmit}>

                        <input type="email" placeholder="Email" name="username" value={username} onChange={this.onChange} className="input-style" required /> 
                    
                        <input type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} className="input-style" required />
                        <br/>
                        
                        <button type="primary" htmlType="submit" className="input-btn" block>Register</button>

                        <p className="lt">
                            Already have an account? <Link to="/login"> Login here</Link>
                        </p>

                </form>
            </div>
        );
    }
}

export default Register;