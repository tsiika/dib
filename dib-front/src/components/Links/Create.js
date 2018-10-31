import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';


const FormItem = Form.Item;


class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            url: '',
            message: ''
        };
    }

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
            axios.get('/api/links/')
            .then(res => {
                this.setState({ links: res.data });
            })
            .catch((error) => {
                if(error.response.status === 401) {
                    this.props.history.push('/login');
                }
            });
        }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, url } = this.state;

        axios.post('/api/links', { name, description, url })
            .then((result) => {
                this.props.history.push("/dashboard")
            });
        }
    
    render() {
        const { name, description, url } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                lg: { span: 12 },
                sm: { span: 8 },
                
            }
        }
        return (
        <div className="container">
            <Row >
                <Col xs={{ span: 24 }} sm={{ span: 12}}  lg={{ span: 12 }}>
                    <h2>
                        Add Link
                    </h2>

                    <Form onSubmit={this.onSubmit}>
                        <FormItem {...formItemLayout}>
                            <label className="label-style" for="name">Name</label>
                            <Input prefix={<Icon type="info-circle" className="icon-style"/>} type="text"  name="name" value={name} onChange={this.onChange} placeholder="Name" required={true} className="input-style" /> 
                        </FormItem>

                        <FormItem {...formItemLayout}>
                            <label className="label-style" for="description">Description</label>
                            <Input prefix={<Icon type="question-circle" className="icon-style"/>} name="description" placeholder="Description" value={description} onChange={this.onChange} required={true} className="input-style" /> 
                        </FormItem>

                        <FormItem  {...formItemLayout}>
                            <label className="label-style" for="url">Url</label>
                            <Input prefix={<Icon type="link" className="icon-style"/>} type="text"  name="url" value={url} onChange={this.onChange} placeholder="https://google.com" required={true} className="input-style"/>
                        </FormItem>

                        <Button type="primary" htmlType="submit">Submit</Button>&nbsp;
                        <Button type="danger"><Link to="/dashboard">Return</Link></Button>

                        
                    </Form>
                </Col>
                
                <Col xs={{ span: 24 }} sm={{ span: 12}} lg={{ span: 12 }}>
                <br/>
                    <p>Adipisicing culpa amet laboris anim fugiat. Est dolore labore consectetur ipsum et eiusmod velit voluptate. Eiusmod fugiat veniam anim veniam irure minim Lorem non reprehenderit. Enim exercitation dolor est duis sunt do veniam aliquip laboris officia. Excepteur dolore sint adipisicing et in et officia anim officia pariatur elit aute occaecat sint. Eu consequat laborum esse tempor laborum enim id Lorem commodo ad nisi culpa ullamco sit.

Nulla sit occaecat veniam Lorem magna laborum fugiat. Lorem ullamco voluptate et est commodo non eiusmod ex nisi. Eu tempor ad ut aliquip. Culpa aute minim occaecat excepteur dolore id aliquip veniam esse veniam velit ullamco anim. Dolore aliqua ex esse do nulla consectetur ea sunt. Minim do exercitation aliqua ad magna fugiat esse proident sunt excepteur labore ad duis eu. Quis irure excepteur veniam aliqua.

Cupidatat velit cillum et nisi ea exercitation aliquip pariatur dolor ullamco sint. Ipsum dolor nisi voluptate Lorem sit ut fugiat culpa exercitation commodo. Exercitation sunt adipisicing amet quis excepteur reprehenderit tempor.

Esse Lorem est labore eu excepteur laborum adipisicing nisi et nisi. Sint irure tempor occaecat velit Lorem sit ea ad ut. Aute magna deserunt consectetur sint quis pariatur aliqua amet amet nisi. Laboris consequat ipsum aute quis sint.</p>
                </Col>
            </Row>
        </div>
        )
    }
}


export default Create;