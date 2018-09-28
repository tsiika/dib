import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Icon, List, Card } from 'antd';

/* TODO:
- Add card meta for better and more free styling. 
**/

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        links: []
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.get('/api/links/')
            .then(res => {
                this.setState({ links: res.data });
                console.log(this.state.links);
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push('/login');
                }
            });
        }
        
        logout = () => {
            localStorage.removeItem('jwtToken');
            window.location.reload();
        } 

    render() {
    return (
        <div class="container">
            <h2>Your links: </h2><br/>
            <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={this.state.links}
            renderItem={link => (
            <List.Item>
                <Card 
                    hoverable
                    key={link._id}
                    title={link.name}
                    className="ct"
                    actions={[<Link to={`/show/${link._id}`}><Icon type="search" title="Show info" alt="Show info"/></Link>, <Link to={`/edit/${link._id}`}><Icon type="edit" title="Edit" alt="Edit"/></Link>]}
                    >
                    <p className="cd">{link.description}</p>
                
                    <Link to={link.url} target="_blank">{link.url}</Link>
                </Card>
            </List.Item>
            )}
            />
    </div>
    );
    }
}

export default Dashboard;