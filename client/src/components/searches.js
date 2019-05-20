import React, { Component } from 'react';
import Search from './search';

class Searches extends Component {

  constructor (props) {
    super(props);
    this.sortByLikes = this.sortByLikes.bind(this)
    this.state = {
      searches: [],
      sort: false
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.searches !== prevProps.searches) {
      this.setState({
        ...this.state, searches: this.props.searches
      })
    }
  }


  sortByLikes() {
    console.log('Click happened');
    const sortedSearches =  [...this.state.searches]

    function compare(a,b) {
      if (a.likes > b.likes)
        return -1;
      if (a.likes < b.likes)
        return 1;
      return 0;
    }

    sortedSearches.sort((a,b) => compare(a, b))

    this.setState({ searches: sortedSearches })
  }



  render() {
    const { sort, searches } = this.state  

      return (
        <div>
        <button onClick={this.sortByLikes}> Sort </button> 
        {
          this.state.searches.map(search =>(
        <h3 key={search.id}>
        <li>{ search.query } <Search likes={search.likes} id={search.id} /> </li>
        </h3>))}
        </div>
      )
      
  } 
}

export default Searches;