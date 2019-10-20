import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './containers/NavBar';
import Navbar from './containers/NavBar';

class App extends Component {
  render() {

    if(this.props.userLoggedIn)
      return (
        <Navbar/>
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
