import reducer from './filterReducer'
import * as types from '../constants/actionTypes'

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(types.SHOW_ALL_FILTER)
  })

  it('should handle SET_FILTER', () => {
    expect(
      reducer(types.SHOW_ALL_FILTER, {
        type: types.SET_FILTER,
        filter: types.SHOW_CHEAP
      })
    ).toEqual(types.SHOW_CHEAP)
  })

})