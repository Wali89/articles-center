import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


class QueryInput extends Component {
  state = {
    text: '',
    redirect: false
  }


  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchArticles(this.state.text)
    this.setState({
      redirect: true
    })  
  }
 
  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={`/search/${this.state.text}`} />
      )
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <h3>Search</h3>

          <div>

            <input type="text" placeholder="Search" value={this.state.text} onChange={this.handleChange}/>
            <button type="submit">Search</button>

          </div>

        </form>
        
      </div>
    )
  }

} 

export default QueryInput;