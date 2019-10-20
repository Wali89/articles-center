import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

export default (props) => {
    return (
        <Provider store={createStore(rootReducer,applyMiddleware(thunk))}>
            {props.children}
        </Provider>
    );
};