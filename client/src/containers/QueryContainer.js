import React, { Component } from 'react';
import QueryInput from '../components/queryInput';
import QueryArticles from '../components/queryArticles';
import Searches from '../components/searches';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { getSearches } from '../actions/articleActions';
import { debug } from 'util';
import Search from '../components/search';


class QueryContainer extends Component {
  
  constructor (props) {
    super(props)
    
    this.state = {
      searches: [],
      query: props.query,
      numResults: ''

    }

  }
  
  componentDidMount(){
    this.props.getSearches()
  }


  sortByLikes() {
    
    const sortedSearches =  [...this.state.searches]
    .sort((a, b) => a.likes > b.likes)
    this.setState(function() {
      return{
      searches: sortedSearches
      }
    })
  }


  render() {
    
    
    return (
      <div className="search">
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} />

        </div>

        <div>
          <QueryArticles results={this.props.results} numResults={this.props.numResults} searchDone={this.props.searchDone}/> 
        </div>

         
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    results: state.results,
    query: state.query,
    numResults: state.numResults,
    searchDone: state.searchDone,
    searches: state.searches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query) => dispatch(searchArticles(query)),
    getSearches: () => dispatch(getSearches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);