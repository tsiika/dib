import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Icon } from 'antd';



/* Components */
import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Register from '../components/Register';

/* Modules */
import Front from '../modules/Front';
import Dashboard from '../modules/Dashboard';
import Home from '../modules/Container';
import NoMatch from '../modules/404';

const { Header, Footer, Sider, Content } = Layout;

class MainMenu extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        current: 'home',
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        this.props.history.push('/');
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    
    render() {
    return (
            <div>
                <Layout>
                    <Header className="header-style">
                        <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        >
                            
                                <Menu.Item key="home">
                                    <Link to="/" component={Front}> <Icon type="home" theme="outlined" /> Home</Link>
                                </Menu.Item>

                                <Menu.Item>
                                    { localStorage.getItem('jwtToken') &&
                                    <Link to="/dashboard" component={Dashboard}><Icon type="profile" theme="outlined" /> Dashboard</Link>
                                    }
                                </Menu.Item>

                                <Menu.Item>
                                    { localStorage.getItem('jwtToken') &&
                                    <Link to="/create" component={Create}><Icon type="plus-circle" theme="outlined" /> Add Link</Link>
                                    }
                                </Menu.Item>

                                <Menu.Item>
                                    <Link to="/login" component={Login}><Icon type="login" theme="outlined" />Login</Link>
                                </Menu.Item>

                                <Menu.Item>
                                    <Link to="/register" component={Register}> <Icon type="user-add" theme="outlined" />Register</Link>
                                </Menu.Item>

                                <Menu.Item>
                                    { localStorage.getItem('jwtToken') &&
                                    <Link to="/logout" component={Logout} onClick={this.logout}><Icon type="close-circle" theme="outlined" /> Logout</Link>
                                        }
                                </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>

            </div>
        );
    }
}

export default MainMenu;