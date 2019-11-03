import React, { Component } from 'react';
import Article from '../components/article';
import Articles from '../components/articles';
import { connect } from 'react-redux';
import { fetchTopStories } from '../actions/articleActions';

class TopStoriesContainer extends Component {
  componentDidMount() {
    this.props.fetchTopStories()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <Articles articles={this.props.topStories}/>
        
      </div>  
    )
  }

}

const mapStateToProps = (state) => {
  return {topStories: state.news.topStories}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopStories: () => dispatch(fetchTopStories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesContainer);