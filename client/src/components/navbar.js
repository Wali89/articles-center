import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopStoriesContainer from '../containers/TopStoriesContainer';
import ChannelsContainer from '../containers/ChannelsContainer';
import ChannelArticlesContainer from '../containers/ChannelArticlesContainer';
import QueryContainer from '../containers/QueryContainer';

const Navbar = () => {
  return(
    <Router>
      <div>
        <div className="App-navbar">
          <div className="ui-tabular-stackable-menu">
            <button className="button"><Link to="/" id="TopStories-link" className="item"> Top Stories </Link></button>
            <button className="button"><Link to="/channels"> Browse Channels </Link></button>
            <button className="button"><Link to="/search">Search Articles</Link></button>
            <h1 id="title" className="title">Culture</h1>
          </div>
        </div>
        <div className="ui hidden divider"></div>
        {/*Routes */} 
        <Route exact path="/" component={TopStoriesContainer} />
        <Route exact path="/channels" component={ChannelsContainer} />
        <Route exact path="/channels/:id" component={ChannelArticlesContainer} />
        <Route exact path="/search" component={QueryContainer} />
        <Route exact path="/search/:query" component={QueryContainer} />

    </div>
    </Router>
  )
}

export default Navbar;