import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchChannelArticles } from '../actions/articleActions';
import Articles from '../components/articles';


class ChannelArticlesContainer extends Component {
  state = {
    page: 1
  }

  componentDidMount() {
    this.props.searchChannelArticles(this.props.match.params.id, this.state.page)
  }

  render(){
    return(
      <div>
        <div id="channel-name">
          <h3>{this.props.location.state.name}</h3>
        </div>
      

        <div className>
          <Articles articles={this.props.channelArticles} source= {this.props.match.params.id}/>
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {channelArticles: state.news.channelArticles}
}

const mapDispatchToProps = dispatch => {
  return {
    searchChannelArticles: (channel) => dispatch(searchChannelArticles(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelArticlesContainer);

