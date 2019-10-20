import { combineReducers } from 'redux';
import userReducer from 'reducers/userReducer';
import articlesReducer from 'reducers/articlesReducer';


const rootReducer = combineReducers({
  user: userReducer,
  news: articlesReducer
});
 
export default rootReducer;