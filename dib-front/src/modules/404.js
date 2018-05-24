import React, { Component } from 'react';

import Logo from '../assets/dib.png';
import '../App.css';

import Edit from '../components/Links/Edit';
import Create from '../components/Links/Create';
import Show from '../components/Links/Show';
import Menu from '../components/Menu';

import Dashboard from './Dashboard';



class NoMatch extends Component {
    render() {
    return (
        <div>
            <h1>404</h1>
            <p>Nothing here!</p>
        </div>
    );
    }
}



export default NoMatch;
