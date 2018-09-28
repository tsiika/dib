/* 
Make image responsive in the future.
**/

import React, { Component } from 'react';
import { Row, Col } from 'antd'; 


import Logo from '../assets/dib.png';
import '../App.css';



class Front extends Component {
    render() {
    return (
        <div className="container">
            <Row>
                <Col span={24}>
                    <img src={Logo} alt="dib logo"/>
                    <h1>New era of front pages is here!</h1>
                </Col>
            </Row>
        </div>
    );
    }
}



export default Front;
