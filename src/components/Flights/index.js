import React from 'react';
import { useDispatch } from 'react-redux';
import * as types from '../../constants/actionTypes';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { deleteFlight } from '../../actions/contentActions';

function Flight({ details: { type, route, startDate, endDate, durationMinutes, index } }) {
    const dispatch = useDispatch();

    return (
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <FontAwesomeIcon className='close' icon={faWindowClose} onClick={() => {
                      dispatch(deleteFlight(index))
                    }} />
                    <h5 class="card-title">{route}</h5>
                    <p class="card-text">{`${startDate} - ${endDate}`}</p>
                    <p class="card-text">{`Duration: ${durationMinutes} (minutes)`}</p>
                    <p class="card-text">
                      <FontAwesomeIcon className='svgPlane' icon={faPlane} />
                      {`${type.charAt(0).toUpperCase() + type.slice(1)} Flight`}
                    </p>
                    <a href="https://www.google.com/flights" class="btn btn-primary">Book This Flight</a>
                </div>
            </div>
        </div>
    )
}

export default function Flights() {
  const filteredFlights = useSelector(state => getVisibleFlights(state.content.content, state.filter, state.order));

  return (
      <div class="container">
          <div class="row">
              { filteredFlights.map(flight => <Flight details={flight} />) }
          </div>
      </div>
    );
}

const getVisibleFlights = (flights, filter, order) => {
    let newFlights = flights;

    switch (filter) {
      case types.SHOW_ALL_FILTER:
        newFlights = flights;
        break;
      case types.SHOW_BUSINESS:
        newFlights = flights.filter((flight) => flight.type === 'business');
        break;
      case types.SHOW_CHEAP:
        newFlights = flights.filter((flight) => flight.type === 'cheap')
        break;
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }

    switch (order) {
      case types.SHOW_DURATION:
        newFlights = newFlights.slice().sort((x, y) => x.duration > y.duration ? 1 : -1);
          break;
      case types.SHOW_STARTTIME:
        newFlights = newFlights.slice().sort((x, y) => x.departure > y.departure ? 1 : -1);
          break;
      case types.SHOW_ENDTIME:
        newFlights = newFlights.slice().sort((x, y) => x.arrival > y.arrival ? 1 : -1);
          break;
    }

      return newFlights;
  };