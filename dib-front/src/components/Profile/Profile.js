import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//@TODO    WIP
//@desc    This part is going to need Redux for get the desired result. Implementation is underway.

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <p>Hello, </p>
                {this.state.udata.map(user => (
                    <div key={user._id}>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Profile;
