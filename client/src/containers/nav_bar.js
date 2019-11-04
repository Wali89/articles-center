import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopStoriesContainer from './top_stories';
import ChannelsContainer from './channels';
import ChannelArticlesContainer from './channel_articles';
import QueryContainer from './query';
import LogInContainer from './log_in';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'


const NewsNavbar = styled(Navbar)`
  width: 100%;
  border: solid 5px #3F5941;
  background-color: white;
  color: #3F5941;
  text-align: left;
  position: fixed;
  top: 0; 
`;

const NewsBrand = styled(NavLink)`
    padding: 5px 12px 12px 12px;
    margin: 0 0 0 0.5em;
    color: #3F5941;
    font-size: 48px;
    font-weight: bold;
    font-family: Impact, Times New Roman, Times, serif;
`;

const NewsLink = styled(NavLink)`
    padding: 12px;
    margin: 0 12px 0px 0px;
    textDecoration: none;
    color: black;
    font-size: 18px;
`;


class NavBar extends Component {
  render() {
    let userOptions = null;
    let logoutOption=null;

    if (this.props.userLoggedIn) {
      userOptions= 
      <React.Fragment>
        <button className="button"><NewsLink to="/preferences"> Preferences </NewsLink></button>
        <button className="button"><NewsLink to="/" id="TopStories-link" className="item"> Top Stories </NewsLink></button>

        <button className="button"><NewsLink to="/channels"> Browse Channels </NewsLink></button>

        <button className="button"><NewsLink to="/search">Search Articles</NewsLink></button>

        <button className="button"><NewsLink to="/users">Log In</NewsLink></button> 

        <h1 id="title" className="title">Articles Center</h1>
      </React.Fragment>
    };
  return(
    
    <Router>
      
        <div className="App-navbar">
        {userOptions}
        </div>

        <div className="ui hidden divider"></div>
        {/*Routes */} 
        <Route exact path="/" component={TopStoriesContainer} />

        <Route exact path="/channels" component={ChannelsContainer} />

        <Route exact path="/channels/:id" component={ChannelArticlesContainer} />

        <Route exact path="/search" component={QueryContainer} />

        <Route exact path="/search/:query" component={QueryContainer} />

        <Route exact path="/users" component={LogInContainer} />

        <Route exact path="/users" component={LogInContainer} />

    
    </Router>
    
    )
  }
}

export default NavBar;