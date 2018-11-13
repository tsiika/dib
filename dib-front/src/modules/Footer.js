import React, { Component } from 'react';
import '../App.css';

class SiteFooter extends Component {
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



export default SiteFooter;
