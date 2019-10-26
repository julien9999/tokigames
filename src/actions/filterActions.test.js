import * as actions from './filterActions'
import * as types from '../constants/actionTypes'

describe('filter actions', () => {
  it('should create a filter action', () => {
    const filter = 'test'
    const expectedAction = {
      type: types.SET_FILTER,
      filter
    }
    expect(actions.setFilter(filter)).toEqual(expectedAction)
  })
})