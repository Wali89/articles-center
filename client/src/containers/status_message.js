import React, { Component } from 'react';
import { connect } from 'react-redux';

class StatusMEssage extends Component {

    render() {
        return(
            <Usermessage>
                {this.props.message}
            </Usermessage>
        );
    }

}

const mapStateToProps = state => {
    return {
        message: state.user.statusMessage,
    }
}

export default connect(mapStateToProps)(StatusMessage)