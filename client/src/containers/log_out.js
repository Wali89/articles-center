import { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from 'actions/user.js'

class Logout extends Component {

    componentDidMount() {
        console.log("Logout!");
        this.props.logoutUser();   
        this.props.history.push('/');            
    } 

    render() {
        return null
    }
}

export default connect(null,{logoutUser})(Logout)
