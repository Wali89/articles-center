import React, { Component } from 'react';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => this.setState({
    [event.target.name]: event.target.value
  });

  handleLogin = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }
  

}