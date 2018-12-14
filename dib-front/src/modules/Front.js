/* 
Make image responsive in the future.
**/

import React, { Component } from "react";

import Logo from "../assets/dib.png";
import "../App.css";

class Front extends Component {
    render() {
        return (
            <div className="container">
                <img src={Logo} alt="dib logo" />
                <h1>New era of front pages is here!</h1>
            </div>
        );
    }
}

export default Front;
