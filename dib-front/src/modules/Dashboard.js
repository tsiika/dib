import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import axios from 'axios';


/* TODO:
- Add card meta for better and more free styling. 
**/

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        links: []
        };
    }

    componentDidMount() {
            axios.get('/api/links/')
            .then(res => {
                this.setState({ links: res.data });
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
            <h2>Your links: </h2><br/>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Url</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    
                {this.state.links.map((link) =>
                    <tr key={link._id}>
                    <td><Link to={`/show/${link._id}`}>{link.name}</Link></td>
                    <td><Link to={link.url} target="_blank">{link.url}</Link></td>
                    <td>{link.description}</td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>
    );
    }
}

export default Dashboard;