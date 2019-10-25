import objectAssign from 'object-assign';

import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function orderReducer(state = initialState.content, action) {
  switch (action.type) {
    case types.CONTENT_UPDATE_SUCCESS:
      return objectAssign({}, state, { updateState: 1, content: action.payload });

    case types.CONTENT_UPDATE_ERROR:
      return objectAssign({}, state, { updateState: 0 });

    default:
      return state;
  }
}
