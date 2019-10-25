import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contentReducer from './contentReducer';
import filterReducer from './filterReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  content: contentReducer,
  filter: filterReducer,
  order: orderReducer,
});

export default rootReducer;
