import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
        udata: []
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.get('/api/auth/profile/')
            .then(res => {
                this.setState({ udata: res.data });
                console.log(this.state.udata);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push('/login');
                };
                if(error.response.status === 500) {
                    console.log('Error 500, internal server error.');
                }
            });
        }
        
        logout = () => {
            localStorage.removeItem('jwtToken');
            window.location.reload();
        }
        

    render() {
    return (
        <div className="container">
            
            <p>Hello, </p>
                {this.state.udata.map((user) =>
                    <div key={user._id}>
                    <p>{user.username}</p>
                    </div>
                )}
        </div>
    );
    }
}

export default Profile;