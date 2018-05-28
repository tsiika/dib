import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            url: '',
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, url } = this.state;

        axios.post('/api/links', { name, description, url })
            .then((result) => {
                this.props.history.push("/")
            });
        }
    
    render() {
        const { name, description, url } = this.state;
        return (
        <div class="container">
        <div class="panel panel-default">
            <div class="panel-heading">
            
            <h3 class="panel-title">
                Add Link
            </h3>
            </div>
            <div class="panel-body">
            <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                </div>
                <div class="form-group">
                    <label for="url">URL:</label>
                    <input type="text" class="form-control" name="url" value={url} onChange={this.onChange} placeholder="https://google.com" />
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            </div>
        </div>
        </div>
        )
    }
}


export default Create;