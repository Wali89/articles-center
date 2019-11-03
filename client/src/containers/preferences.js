import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from 'styled-components';

import {getNewsSources}  from 'action/articleActions';
import { updateUserPreferences } from 'actions/user';


class Preferences extends Component {

    state = {
        selectedSources: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateUserPReferences(this.props.userId, {newsSources:this.state.selectedSources});
        this.props.history.push('/');
        

    }

    onChange = (event) => {
        let name = event.target.value;
        let tempSources= this.state.selectedSources;
        let index = tempSources.findIndex((s)=>s.news_source_id===name);

        if(index >= 0) {
            tempSources.splice(index,1)
        } else {
            tempSources.push(this.props.allSources.find((s) => s.news_source_id===name))
        }
        this.setState({selectedSources: tempSource});

    }

    componentDidMount() {

        if (!this.props.isLoggedIn) {
            return (
                <p>You need to be logged in to use this option</p>
            )
        } else {
            return(
                <div>
                    <PreferncesFormSection>
                        <h1>Preferences</h1>
                        <form onSubmit={ event => this.jandleSubmit(event)}>
                        <SourceTable onChange={this.onChange} allSources={this.props.allSources} selectedSources={this.state.selectedSources} />
                        <SubmitButton type="submit">Save</SubmitButton>

                        </form>
                    </PreferncesFormSection>

                </div>
            )
        }
    }
    

}

const mapStateToProps = state => {
    return{
        userId: state.user.id,
        isLoggedIn: state.user.isLoggedIn,
        userNewsSources: state.user.newsSources,
        allSources: state.news.allSources
    }
}

export default connect(mapStateToProps,{getNewsSources,updateUserPreferences}) (Preferences);
