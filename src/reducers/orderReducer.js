import * as types from '../constants/actionTypes';

const orderFilter = (state = '', action) => {
  switch (action.type) {
    case types.SET_ORDER:
      return action.order;
    default:
      return state;
  }
};

export default orderFilter;
