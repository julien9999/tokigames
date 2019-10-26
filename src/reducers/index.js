import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import contentReducer from './contentReducer';
import filterReducer from './filterReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  content: contentReducer,
  filter: filterReducer,
  order: orderReducer,
  form: formReducer
});

export default rootReducer;
