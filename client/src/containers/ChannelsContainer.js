import React, { Component } from 'react';
import Channels from '../components/channels';
import { connect } from 'react-redux';
import { fetchChannels } from '../actions/articleActions';


class ChannelsContainer extends Component {
  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    return (
      <div>
      <Channels />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {articles: state.sources}
}


const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer);

