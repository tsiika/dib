import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
class Container extends Component {
    render() {
    return (
        <div className="container">
            <Layout>
                <Content>
                    
                </Content>
            </Layout>
            
        </div>
    );
    }
}



export default Container;
