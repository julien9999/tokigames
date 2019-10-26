import React from 'react';
import renderer from 'react-test-renderer';
import Flights, { Flight, getVisibleFlights } from './index';
import * as types from '../../constants/actionTypes';

const mockFlight = ({index, type = 'business', duration = 10, startDate = '10/03/2019', endDate = '11/03/2019', departure = 100, arrival = 101}) => ({
  type, 
  route: 'Hong Kong - Singapore', 
  startDate, 
  endDate, 
  departure,
  arrival,
  durationMinutes: duration, 
  duration: duration, 
  index
});

jest.mock('react-redux', () => ({
  useDispatch: ()=> {},
  useSelector: () => ([
    mockFlight({ index: 1 }),
    mockFlight({ index: 2 })
  ])
}));



describe('<Flight>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Flight 
        details={mockFlight({ index: 1 })}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Flights>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Flights />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('getVisibleFlights', () => {
  it('returns correctly SHOW_ALL_FILTER', () => {
    const mock = [mockFlight({ index: 1 }), mockFlight({ index: 2 })];
    expect(getVisibleFlights(mock, types.SHOW_ALL_FILTER, null))
    .toEqual(mock)
  });

  it('returns correctly SHOW_BUSINESS', () => {
    const mock = [mockFlight({ index: 1 }), mockFlight({ index: 2 })];
    expect(getVisibleFlights(mock, types.SHOW_BUSINESS, null))
    .toEqual([mockFlight({ index: 1 }), mockFlight({ index: 2 })])
  });

  it('returns correctly SHOW_CHEAP', () => {
    const mock = [
      mockFlight({ index: 1 }), 
      mockFlight({ index: 2 }), 
      mockFlight({ index: 3, type: 'cheap' })
    ];
  
    expect(getVisibleFlights(mock, types.SHOW_CHEAP, null))
    .toEqual([mockFlight({ index: 3, type: 'cheap' })])
  });

  it('returns correctly SHOW_DURATION', () => {
    const mock = [
      mockFlight({ index: 1, duration: 100 }),
      mockFlight({ index: 2, duration: 20 }),
      mockFlight({ index: 3, duration: 10 })
    ];

    expect(getVisibleFlights(mock, types.SHOW_ALL_FILTER, types.SHOW_DURATION))
    .toEqual([
      mockFlight({ index: 3, duration: 10 }),
      mockFlight({ index: 2, duration: 20 }),
      mockFlight({ index: 1, duration: 100 })
    ])
  });

  it('returns correctly SHOW_STARTTIME', () => {
    const mock = [
      mockFlight({ index: 1, departure: 1000 }),
      mockFlight({ index: 2, departure: 10 }),
      mockFlight({ index: 3, departure: 100 })
    ];

    expect(getVisibleFlights(mock, types.SHOW_ALL_FILTER, types.SHOW_STARTTIME))
    .toEqual([
      mockFlight({ index: 2, departure: 10 }),
      mockFlight({ index: 3, departure: 100 }),
      mockFlight({ index: 1, departure: 1000 }),
    ])
  });

  it('returns correctly SHOW_ENDTIME', () => {
    const mock = [
      mockFlight({ index: 1, arrival: 1000 }),
      mockFlight({ index: 2, arrival: 10 }),
      mockFlight({ index: 3, arrival: 100 })
    ];

    expect(getVisibleFlights(mock, types.SHOW_ALL_FILTER, types.SHOW_ENDTIME))
    .toEqual([
      mockFlight({ index: 2, arrival: 10 }),
      mockFlight({ index: 3, arrival: 100 }),
      mockFlight({ index: 1, arrival: 1000 }),
    ])
  });
});