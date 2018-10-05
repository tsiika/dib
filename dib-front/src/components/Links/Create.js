import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            url: '',
            message: ''
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
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
                this.props.history.push("/dashboard")
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
                    <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" required={true} />
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3" required={true} >{description}</textArea>
                </div>
                <div class="form-group">
                    <label for="url">URL:</label>
                    <input type="text" class="form-control" name="url" value={url} onChange={this.onChange} placeholder="https://google.com" required={true} />
                </div>
                <Button type="default" htmlType="submit">Submit</Button>&nbsp;
                <Button type="danger"><Link to="/dashboard">Return</Link></Button>

                
            </form>
            </div>
        </div>
        </div>
        )
    }
}


export default Create;