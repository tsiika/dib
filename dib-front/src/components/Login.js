import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';



import '../styles/login.css';


const FormItem = Form.Item;

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
                this.props.history.push('/profile')
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.setState({ message: 'Login failed, username and password invalid!'});
                }
            });
    }


    render() {
        const { username, password, message } = this.state;

        return (
            <div className="container">
                <Row>
                    <Col span={24}>
                        <form onSubmit={this.onSubmit}>
                            <h1>Login</h1>

                            <Input prefix={<Icon type="user" className="icon-style"/>} type="email" placeholder="Email" name="username" value={username} onChange={this.onChange} className="input-style" required /> 
                            
                            <Input prefix={<Icon type="lock" className="icon-style"/>} type="password" placeholder="Password" name="password" value={password} onChange={this.onChange} className="input-style" required />
                            <br/>
                            <Button type="primary" htmlType="submit" className="input-btn" block>Login</Button>
                        <p className="lt">
                            Not a member? <Link to="/register"> Register here</Link>
                        </p>

                        { message !== '' &&
                            <div class="alert alert-warning alert-dismissible" role="alert">
                                { message }
                            </div> }
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;