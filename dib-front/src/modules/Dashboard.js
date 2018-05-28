import React, { Component } from 'react';
import { Link, Route, Switch, Router } from 'react-router-dom';
import axios from 'axios';

import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';

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
        console.log(this.state.links);
    });
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
        </div>

        </div>
    );
    }
}

export default Dashboard;