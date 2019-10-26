import reducer from './contentReducer'
import * as types from '../constants/actionTypes'


const mockFlight = (index) => ({
    type: 'Business', 
    route: 'Hong Kong - Singapore', 
    startDate: "10/03/2019", 
    endDate: "11/03/2019", 
    durationMinutes: 10, 
    index
  });

describe('content reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        "content": [], 
        "loading": -1
    })
  })

  it('should handle CONTENT_UPDATE_ERROR', () => {
    expect(
      reducer([], {
        type: types.CONTENT_UPDATE_ERROR,
      })
    ).toEqual({
        "loading": 0
    })
  })

  it('should handle CONTENT_UPDATE_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.CONTENT_UPDATE_SUCCESS,
        payload: [
            mockFlight(0)
        ]
      })
    ).toEqual({
        content: [mockFlight(0)],
        "loading": 1
    })
  })

  it('should handle ADD_FLIGHT', () => {
    expect(
      reducer({ 
          content: [mockFlight(0)],
          loading: 1
        }, {
        type: types.ADD_FLIGHT,
        flight: mockFlight(1)
      })
    ).toEqual({
        content: [mockFlight(0), mockFlight(1)],
        loading: 1
    })
  })

  it('should handle DELETE_FLIGHT', () => {
    expect(
      reducer({ 
          content: [mockFlight(0), mockFlight(1)],
          loading: 1
        }, {
        type: types.DELETE_FLIGHT,
        id: 1
      })
    ).toEqual({
        content: [mockFlight(0)],
        loading: 1
    })
  })


})