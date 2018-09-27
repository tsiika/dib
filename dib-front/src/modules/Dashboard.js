import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Icon } from 'antd';



class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        links: []
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.get('/api/links/')
            .then(res => {
                this.setState({ links: res.data });
                console.log(this.state.links);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push('/login');
                }
            });
        }
        
        logout = () => {
            localStorage.removeItem('jwtToken');
            window.location.reload();
        }
        

    render() {
    return (
        <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">

            <table class="table table-stripe">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Url</th>
                    <th>Description</th>
                    <th>Date created</th>
                    <th>Tools</th>
                </tr>
                </thead>
                <tbody>
                    
                {this.state.links.map((link) =>
                    <tr key={link._id}>
                    <td>{link.name}</td>
                    <td><Link to={link.url} target="_blank">{link.url}</Link></td>
                    <td>{link.description}</td>
                    <td>{link.created}</td>
                    <td><Link to={`/show/${link._id}`}><Icon type="tool" theme="outlined" /></Link></td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </div>

        </div>
    );
    }
}

export default Dashboard;