import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




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

        axios.put('/api/links/'+this.props.match.params._id, { name, description, url })
            .then((result) => {
                this.props.history.push('/show/'+this.props.match.params._id)
            });
    }
    

    render() {
    return (
        <div>
    <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">
                EDIT LINK
            </h3>
            </div>
            <div className="panel-body">
            <h4><Link to={`/show/${this.state.link._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Link List</Link></h4>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" name="name" value={this.state.link.name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.link.description} onChange={this.onChange} placeholder="Description" />
                </div>
                <div className="form-group">
                <label for="url">URL:</label>
                <input type="text" className="form-control" name="url" value={this.state.link.url} onChange={this.onChange} placeholder="https://google.com" />
                </div>

                <button type="submit" className="btn btn-default"><Link to={'/dasboard'}>Submit</Link></button>
            </form>
            </div>
        </div>
    </div>
        </div>
    );
    }
}

export default Edit;