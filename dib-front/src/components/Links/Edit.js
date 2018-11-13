import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: {}
        };
    }
    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/links/'+this.props.match.params._id)
            .then(res => {
                this.setState({ link: res.data });
            });
    }

    onChange = (e) => {
        const state = this.state.link
        state[e.target.name] = e.target.value;
        this.setState({link: state});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, description, url } = this.state.link;

        axios.put('/api/links/'+this.props.match.params._id, { name, description, url })
            .then((result) => {
                this.props.history.push('/show/'+this.props.match.params._id)
            });
    }
    

    render() {

    return (
    <div className="container">


            <h2>Edit link</h2>
            
            <h4><Link to={`/show/${this.state.link._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Link information</Link></h4>
                <form onSubmit={this.onSubmit}>

                        <label for="name">Name</label>
                        <input type="text" placeholder="Name" name="name" value={this.state.link.name} onChange={this.onChange} className="input-style" required /><br/>

                        <label for="description">Description</label>
                        <input label="Description" type="text" placeholder="Description" name="description" value={this.state.link.description} onChange={this.onChange} className="input-style" required /><br/>

                        <label for="url">Url</label>
                        <input type="url" placeholder="Url" name="url" value={this.state.link.url} onChange={this.onChange} className="input-style" required /><br/>

                    <br/>
                    <button className="button primary">Submit</button>
                </form>

                <p>Aliqua Lorem quis amet est nisi enim ad amet esse ea deserunt minim. Excepteur velit consectetur deserunt id ullamco officia non aute fugiat enim quis. Velit ex ipsum ex occaecat nostrud occaecat ullamco in Lorem sint est.

Aute sit et enim sit incididunt aliquip elit est consequat ullamco adipisicing consectetur. Officia irure officia ut Lorem do voluptate culpa enim adipisicing mollit mollit sunt incididunt. Consectetur mollit consectetur amet consectetur exercitation id minim reprehenderit dolor voluptate aliqua aute amet voluptate. Sunt non Lorem enim cupidatat proident ipsum mollit nisi. Pariatur irure irure deserunt consequat. Ipsum deserunt laborum ullamco deserunt enim occaecat nulla tempor.

Ad aliqua deserunt id Lorem officia laborum dolor et ea ullamco adipisicing sit veniam sunt. Culpa nulla ad ea nostrud proident quis dolore esse labore veniam velit. Labore labore ad occaecat pariatur pariatur est. Lorem et ea ex commodo commodo nisi nostrud duis culpa eiusmod do quis.

Quis ad ad non labore labore ea ullamco est. Eu officia velit id officia aliquip veniam pariatur adipisicing eu ea aliqua fugiat tempor. Adipisicing adipisicing occaecat pariatur in id nulla fugiat laborum consequat laboris esse dolor ex. Anim adipisicing aute aliqua consequat. Nisi proident minim reprehenderit Lorem laboris magna Lorem eiusmod nulla voluptate labore enim fugiat. Eiusmod cupidatat consequat magna ex. Id qui officia elit eu.</p>

    </div>
    );
    }
}

export default Edit;