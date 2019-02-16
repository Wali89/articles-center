import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopStoriesContainer from './containers/TopStoriesContainer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <TopStoriesContainer/>
      </div>
    );
  }
}

export default App;
