import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';
import '../../assets/styles/style-index.css'

class Login extends Component {

    postlogin = (login_data) => {
        this.props.postLogin(login_data);
    }
    render() {
        return (
            <div className="container bg-1">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Username:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" ref="username" placeholder="Username" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" ref="password" placeholder="password" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-8">
                            <input type="submit" className="btn btn-success" onClick={() => this.postlogin(this.refs)} value="Login" />
                        </div>
                    </div>
                    <center>
                        <div className="form-group">
                            <Link to='/register'>Register</Link>
                        </div>
                    </center>
                </form>
            </div>
        )
    }
}

export default Login;