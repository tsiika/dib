import React, { Component } from 'react';
import axios from 'axios';

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        this.props.history.push('/');
    }

    render() {
        return ( 
            <p>Logging out..</p>
        );
    }
}

export default Logout;