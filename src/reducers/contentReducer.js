import objectAssign from 'object-assign';

import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function orderReducer(state = initialState.content, action) {
  switch (action.type) {
    case types.CONTENT_UPDATE_SUCCESS:
      return objectAssign({}, state, { loading: 1, content: action.payload });

    case types.CONTENT_UPDATE_ERROR:
      return objectAssign({}, state, { loading: 0 });

    case types.ADD_FLIGHT:
      return objectAssign({}, state, { 
        content: [
          ...state.content,
          {
            ...action.flight,
            index: state.content.length
          }
        ]
      });
    
    case types.DELETE_FLIGHT:
      return objectAssign({}, state, { 
        content: state.content.filter(flight => flight.index !== action.id)
      });

    default:
      return state;
  }
}
