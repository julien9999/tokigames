import * as actions from './orderActions'
import * as types from '../constants/actionTypes'

describe('order actions', () => {
  it('should create a order action', () => {
    const order = 'test'
    const expectedAction = {
      type: types.SET_ORDER,
      order
    }
    expect(actions.setOrder(order)).toEqual(expectedAction)
  })
})