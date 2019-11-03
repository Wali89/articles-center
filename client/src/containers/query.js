import React, { Component } from 'react';
import QueryInput from '../components/query_input';
import QueryArticles from '../components/query_articles';
import Searches from '../components/searches';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { getSearches } from '../actions/articleActions';
import { debug } from 'util';


class QueryContainer extends Component {
  
  state = {

  }
  
  componentDidMount(){
    
  }



  render() {
    const uuidv4 = require('uuid/v4');
    
    return (
      <div className="search">
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} key={uuidv4()} />

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
    results: state.news.results,
    query: state.news.query,
    numResults: state.news.numResults,
    searchDone: state.news.searchDone,
    searches: state.news.searches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query) => dispatch(searchArticles(query)),
    getSearches: () => dispatch(getSearches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);