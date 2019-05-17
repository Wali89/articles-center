import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from '../components/signup_form';
import LoginForm from '../components/login_form';
import { loginUser, signUpUser } from '../actions/user';


class LoginContainer extends Component {

  state = {
    newUser: false
  }


  render() {

    return (
      <div>
      <SignUpForm handleSubmit={this.props.signUpUser}/>
      <LoginForm handleSubmit={this.props.loginUser}/>
      </div>
    )
  }


}

export default connect(null,{loginUser, signUpUser})(LoginContainer)
