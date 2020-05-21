import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../page/Home/store';
import { reducer as searchReducer } from '../page/Search/store';

const reducer = combineReducers({
  home: homeReducer,
  search: searchReducer
});

export default reducer;
