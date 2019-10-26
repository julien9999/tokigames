import reducer from './orderReducer'
import * as types from '../constants/actionTypes'

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('')
  })

  it('should handle SET_ORDER', () => {
    expect(
      reducer('', {
        type: types.SET_ORDER,
        order: 'test'
      })
    ).toEqual('test')
  })

})