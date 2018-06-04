import React, { Component } from 'react';

import Logo from '../assets/dib.png';
import '../App.css';



class Front extends Component {
    render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src={Logo} alt="dib logo"/>

                    <h1>New era of front pages is here!</h1>
                </div>
            </div>
        </div>
    );
    }
}



export default Front;
