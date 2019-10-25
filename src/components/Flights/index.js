import React from 'react';
import * as types from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

function Flight({details}) {
    const { type, route } = details;

    return (
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{route}</h5>
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

function Flights({ flights }) {
    return (
      <div class="container">
          <div class="row">
              { flights.map(flight => <Flight details={flight} />) }
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

  const mapStateToProps = state => ({
    flights: getVisibleFlights(state.content.content, state.filter, state.order)
  });


export default connect(
    mapStateToProps
  )(Flights);