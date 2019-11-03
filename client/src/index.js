import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './Root';
import App from './App';
import QueryContainer from './containers/query';
import NavBar from './containers/nav_bar';


ReactDOM.render(
  <Root>
    <Router>
      <React.Fragment>
        <NavBar/>
        <Route exact path="/" component={App} />
        <Route exact path='/search' component={QueryContainer} /> 

      </React.Fragment>

    </Router>

  </Root>,
  document.getElementById('root')
)