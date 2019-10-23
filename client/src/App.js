import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './containers/LogInContainer';
import NavBar from './containers/NavBar';

class App extends Component {
  render() {

    if(this.props.userLoggedIn)
      return (
        <NavBar/>
      )

    else return (


      <div className="App">
        <LoginContainer/>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.isLoggedIn
  }

} 
export default App;
