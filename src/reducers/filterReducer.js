import * as types from '../constants/actionTypes';

const visibilityFilter = (state = types.SHOW_ALL_FILTER, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
