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

            <Row>
                <Col span={12} className="half-left">
                <p>
                    Qui excepteur ut labore in adipisicing aute irure cupidatat magna cillum do excepteur. Labore do eu sunt amet est aliquip. Ea culpa enim nulla deserunt sint aliqua eiusmod veniam occaecat cupidatat occaecat laboris qui occaecat. Aute et eu veniam cillum fugiat. Aute cupidatat incididunt quis laboris veniam Lorem ea officia nulla dolor.
                </p>
                </Col>

                <Col span={12}>
                </Col>
            </Row>
        </div>
    );
    }
}



export default Front;
