import * as types from '../constants/actionTypes';

export const setOrder = order => ({
    type: types.SET_ORDER,
    order
})