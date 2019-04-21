import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

export const UserMessage = style.div`
  color:red;
  font-size: 1.5em;
`;

class StatusMessage extends Component {

  render() {
      return (
          <UserMessage>
             {this.props.message}
          </UserMessage>
      );
  }
}

const mapStateToProps = state => {
  return {
    message: state.user.statusMessage,
  }
}
export default connect(mapStateToProps)(StatusMessage)

