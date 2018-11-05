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
            message: ''
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

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.post('/api/links', { name, description, url })
            .then((result) => {
                this.props.history.push("/dashboard")
            });
        }
    
    render() {

        return (
        <div className="container">

                    <h2>
                        Add Link
                    </h2>

                    <form onSubmit={this.onSubmit}>

                            <label className="label-style" for="name">Name</label>
                            <input type="text"  name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" required={true} className="input-style" /> 

                            <label className="label-style" for="description">Description</label>
                            <input name="description" placeholder="Description" value={this.state.description} onChange={this.onChange} required={true} className="input-style" /> 

                            <label className="label-style" for="url">Url</label>
                            <input type="text"  name="url" value={this.state.url} onChange={this.onChange} placeholder="https://google.com" required={true} className="input-style"/>
                        

                        <button type="primary" htmlType="submit">Submit</button>&nbsp;
                        <button type="danger"><Link to="/dashboard">Return</Link></button>

                        
                    </form>

        </div>
        )
    }
}


export default Create;