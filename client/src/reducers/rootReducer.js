import { combineReducers } from 'redux';
import userReducer from './userReducer';
import articlesReducer from './articlesReducer';


const rootReducer = combineReducers({
  user: userReducer,
  news: articlesReducer
});
 
export default rootReducer;