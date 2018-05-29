import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends Component {
    render() {
    return (
        <div>
            <footer>
                <p>dib &#169;{(new Date().getFullYear())}</p>
            </footer>
        </div>
    );
    }
}



export default Footer;
