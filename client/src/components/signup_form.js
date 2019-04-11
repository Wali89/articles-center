import React, { Component } from 'react';

import StatusMessage from 'containers/status_message';


class SignUpForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSignUp = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    };

    handleChange = (event) => this.setState({
        [event.target.name]: event.target.value
    });

    render() {
        return (
            <UserForm>
                <h1>news4u sign up</h1>
                <StatusMessage />                
                <form onSubmit={ event => this.handleSignUp(event) }>
                    <UserInput type="text" name="email" onChange={ event => this.handleChange(event) } placeholder="User Email" />
                    <UserInput type="password" name="password" onChange={ event => this.handleChange(event) } placeholder="Password" />
                    <UserButton type="submit" >Sign Up</UserButton>
                </form> 
                <SubText>Already registered? <UserLink onClick={this.props.handleSwitchForm}>Login!</UserLink></SubText>              
            </UserForm>        
        );
    }
}

export default SignUpForm;