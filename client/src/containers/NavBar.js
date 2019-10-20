import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopStoriesContainer from './TopStoriesContainer';
import ChannelsContainer from './ChannelsContainer';
import ChannelArticlesContainer from './ChannelArticlesContainer';
import QueryContainer from './QueryContainer';
import LogInContainer from './LogInContainer';


class Navbar extends Component {
  render() {
  return(
    
    <Router>
      <div>
        <div className="App-navbar">
          <div className="ui-tabular-stackable-menu">
            <button className="button"><Link to="/" id="TopStories-link" className="item"> Top Stories </Link></button>
            <button className="button"><Link to="/channels"> Browse Channels </Link></button>

            <button className="button"><Link to="/search">Search Articles</Link></button>

           <button className="button"><Link to="/users">Log In</Link></button> 

            <h1 id="title" className="title">Articles Center</h1>

          </div>
        </div>

        <div className="ui hidden divider"></div>
        {/*Routes */} 
        <Route exact path="/" component={TopStoriesContainer} />

        <Route exact path="/channels" component={ChannelsContainer} />

        <Route exact path="/channels/:id" component={ChannelArticlesContainer} />

        <Route exact path="/search" component={QueryContainer} />

        <Route exact path="/search/:query" component={QueryContainer} />

        <Route exact path="/users" component={LogInContainer} />

    </div>

    </Router>
    
  )
  }
}

export default Navbar;