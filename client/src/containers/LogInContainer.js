import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUpForm from '../components/signup_form';
import LoginForm from '../components/login_form';
import { loginUser, signUpUser } from '../actions/user';


class LoginContainer extends Component {

  state = {
    newUser: false
  }

  
  handleSwitchForm = () => {
    this.setState((prevState) => ({newUser: !prevState.newUser}));
  }

  render() {

    let form = this.state.newUser ?
    <LoginForm handleSwitchForm={this.handleSwitchForm} handleSubmit={this.props.loginUser}/>
      : <SignUpForm handleSwitchForm={this.handleSwitchForm} handleSubmit={this.props.signUpUser}/>

    return (
      <div>
        {form}
      </div>
    )
  }


}

export default connect(null,{loginUser, signUpUser})(LoginContainer)
