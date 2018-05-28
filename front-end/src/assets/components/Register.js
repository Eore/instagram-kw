import React, { Component } from 'react';
// import '../../assets/styles/style-index.css';
// import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';

class Register extends Component {
    postregis = (register_data) => {
        this.props.postRegis(register_data);
    }
    
    render() {
        return (
            <div className="container bg-1">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label  htmlFor="username" className="control-label col-sm-2">Username:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" ref="username" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label col-sm-2">Email:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" ref="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" ref="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" className="btn btn-info" onClick={() => this.postregis(this.refs)} value="Registration" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register;