import { combineReducers } from 'redux';
import userReducer from 'reducers/user_reducer';
import newsReducer from 'reducers/news_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer
});
 
export default rootReducer;