import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Login from './assets/components/Login';
import Register from './assets/components/Register';

class App extends Component {

  constructor() {
    super()
    this.state = {
      user_name: [],
      user_id: [],
      login_status: [],
      redirect_login: false,
      redirect_register: false,
      redirect_timeline: false
    }
  }

  componentWillMount() {
    this.setState({ redirect_timeline: true })
  }
  /* ============================================= REGIST LOGIN LOGOUT ============================================= */
  postlogin = (data_login) => {
    axios.post('http://localhost:3001/login',
      {
        username: data_login.username.value,
        password: data_login.password.value

      })
      .then((ambilDataLogin) => {
        if (ambilDataLogin.data.login_status === true) {

          this.setState({ user_name: ambilDataLogin.data.user_name, user_id: ambilDataLogin.data.user_id, login_status: ambilDataLogin.data.login_status });
          this.setState({ redirect_timeline: true });
        }
        else {
          this.setState({ redirect_login: true });
        }
      })
  }

  postlogout = () => {

    this.setState({ user_name: '', user_id: '', login_status: '' });
    this.setState({ redirect_timeline: true });
    // console.log(this.state);
  }

  postregis = (data_register) => {
    axios.post('http://localhost:3001/register',
      {
        username: data_register.username.value,
        email: data_register.email.value,
        password: data_register.password.value
      })
      .then((ambilStatusRegister) => {

        if (ambilStatusRegister.data === 'success') {
          this.setState({ redirect_login: true });
          this.setState({ redirect_register: false });
        }
        else {
          this.setState({ redirect_login: false });
          this.setState({ redirect_register: true });
        }
      })
  }

  /* =============================================  ============================================= */

  render() {

    const { redirect_login } = this.state;
    const { redirect_register } = this.state;
    const { redirect_timeline } = this.state;

    if (redirect_timeline) {
      this.setState({ redirect_timeline: false });
      return (
        <Redirect to='/login' />
      )
    }

    if (redirect_login) {
      this.setState({ redirect_login: false });
      return (
        <Redirect to='/login' />
      )
    }

    if (redirect_register) {
      this.setState({ redirect_register: false });
      return (
        <Redirect to='/register' />
      )
    }

    return (
      <div>
        {/* <Header keyChange={this.keyChange.bind(this)} /> */}
        <Switch>
          <Route path="/login" render={() => <Login postLogin={this.postlogin}/>} />
          <Route path="/register" render={() => <Register postRegis={this.postregis}/>} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
