import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';



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
                <Row>
                    <Col span={24}>
                        <h1>Register</h1>
                        <form onSubmit={this.onSubmit}>

                                <Input prefix={<Icon type="user" className="icon-style"/>} type="email" placeholder="Email" name="username" value={username} onChange={this.onChange} className="input-style" required /> 
                            
                                <Input prefix={<Icon type="lock" className="icon-style"/>} type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} className="input-style" required />
                                <br/>
                                
                                <Button type="primary" htmlType="submit" className="input-btn" block>Register</Button>

                                <p className="lt">
                                    Already have an account? <Link to="/login"> Login here</Link>
                                </p>

                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Register;