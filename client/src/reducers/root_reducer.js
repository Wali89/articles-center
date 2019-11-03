import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import articlesReducer from './articles_reducer';


const rootReducer = combineReducers({
  user: userReducer,
  news: articlesReducer
});
 
export default rootReducer;