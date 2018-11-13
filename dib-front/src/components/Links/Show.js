/** FIXME
 * For some reason react doesn't know how to parse the link._id.
 * When you press the name in dashboard it should go to "/show/[ID]". 
 * It goes to the right page alright, but axios doesn't fetch the details of given ID nor delete it.
 * Also upon press of "Edit" button the url is "/show/unidentified".
 * Right now the backend functions correctly at "http://localhost:5000/api/links/[ID]" with all REST functions. This is tested with Insomnia.
 */

/** TODO
 * Fix the previously mentioned problem.
 */

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: [],
        };
    }
    
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/links/'+this.props.match.params._id)
            .then(res => {
                this.setState({link: res.data});
            });
    }

    delete(id){
        console.log(id);
            axios.delete('/api/links/'+id)
                .then((result) => {
                    this.props.history.push("/dashboard")
                });
        }
        render(){

            return(
                <div class="container">
                    <h3>
                        {this.state.link.name}
                    </h3>
                    <div>
                    <dl>
                        <dt>Name:</dt>
                        <dd>{this.state.link.name}</dd>
                        <dt>Description:</dt>
                        <dd>{this.state.link.description}</dd><br/>
                        <dt>Url:</dt>
                        <dd>{this.state.link.url}</dd>
                        <dt>Date created:</dt>
                        <dd>{this.state.link.created}</dd>
                    </dl>
                    <Link to="/dashboard"><button className="button success">Return</button></Link>&nbsp;
                    <Link to={`/edit/${this.state.link._id}`} ><button className="button primary ">Edit</button></Link>&nbsp;
                    <button className="button alert" onClick={this.delete.bind(this, this.state.link._id)} >Delete</button>
                </div>
            </div>
            );
        }
}
export default Show;