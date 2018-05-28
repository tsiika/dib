import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Create from './Create';
import Show from './Show';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: {}
        };
    }
    componentDidMount(){
        axios.get('/api/links/'+this.props.match.params._id)
            .then(res => {
                this.setState({ link: res.data });
                console.log(this.state.link);
            });
    }

    onChange = (e) => {
        const state = this.state.link
        state[e.target.name] = e.target.value;
        this.setState({link: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, url } = this.state.link;

        axios.put('/api/links/'+this.props.match.params.id, { name, description, url })
            .then((result) => {
                this.props.history.push('/show/'+this.props.match.params.id)
            });
    }
    

    render() {
    return (
        <div>
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
                EDIT LINK
            </h3>
            </div>
            <div class="panel-body">
            <h4><Link to={`/show/${this.state.link._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Link List</Link></h4>
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.link.name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.link.description} onChange={this.onChange} placeholder="Description" />
                </div>
                <div class="form-group">
                <label for="url">URL:</label>
                <input type="text" class="form-control" name="url" value={this.state.link.url} onChange={this.onChange} placeholder="https://google.com" />
                </div>

                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            </div>
        </div>
    </div>
        </div>
    );
    }
}

export default Edit;