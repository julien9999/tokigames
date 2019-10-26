import moment from 'moment';
import { getFlightsCheap, getFlightsBusiness } from '../api/content';
import * as types from '../constants/actionTypes';

function getContentSuccess(payload) {
  return { type: types.CONTENT_UPDATE_SUCCESS, payload };
}

function getContentError() {
  return { type: types.CONTENT_UPDATE_ERROR };
}

function addContentSuccess(flight) {
  return { type: types.ADD_FLIGHT, flight };
}

function deleteContentSuccess(id) {
  return { type: types.DELETE_FLIGHT, id };
}

/**
 * Load Content
 *
 * Get content
 */
export const loadContents = () => {
  return (dispatch) => {
    return Promise.all([getFlightsCheap(), getFlightsBusiness()]).then((response) => {
      const data = [
        ...response[0].data.data.map((element) => ({ 
          ...element, 
          duration: +(element.arrival - element.departure),
          durationMinutes: moment(new Date(element.departure * 1000)).diff(moment(new Date(element.arrival * 1000)), 'minutes'),
          startDate: moment(new Date(element.departure * 1000)).format('MM/DD/YYYY'),
          endDate: moment(new Date(element.arrival * 1000)).format('MM/DD/YYYY'),
          type: 'cheap',
        })),
        ...response[1].data.data.map((element) => ({ 
          startDate: moment(new Date(element.departureTime * 1000)).format('MM/DD/YYYY'),
          endDate: moment(new Date(element.arrivalTime * 1000)).format('MM/DD/YYYY'),
          duration: +(element.arrivalTime - element.departureTime),
          durationMinutes: moment(new Date(element.arrivalTime * 1000)).diff(moment(new Date(element.departureTime * 1000)), 'minutes'),
          arrival: element.arrivalTime,
          departure: element.departureTime,
          route: `${element.arrival}-${element.departure}`,
          type: 'business' 
        }))
      ];

      const indexedData = data.map((element, index) => {
        return {
          ...element,
          index
        }
      })

      dispatch(getContentSuccess(indexedData));
    })
    .catch(err => {
      dispatch(getContentError());
    });
  };
};

export const addFlight = ({ arrival, departure, from, to, type }) => {
  return (dispatch) => {
    dispatch(addContentSuccess({
      type: types.ADD_FLIGHT,
      arrival: moment(arrival, 'YYYY-MM-DD').unix(),
      departure: moment(departure, 'YYYY-MM-DD').unix(),
      duration: moment(arrival, 'YYYY-MM-DD').unix() - moment(departure, 'YYYY-MM-DD').unix(),
      durationMinutes: moment(arrival, 'YYYY-MM-DD').diff(moment(departure, 'YYYY-MM-DD'), 'minutes'),
      startDate: moment(departure, 'YYYY-MM-DD').format('MM/DD/YYYY'),
      endDate: moment(arrival, 'YYYY-MM-DD').format('MM/DD/YYYY'),
      route: `${from}-${to}`,
      type: type ? type : 'business',
    }));
  }
}


export const deleteFlight = (id) => {
  return (dispatch) => {
    dispatch(deleteContentSuccess(id));
  }
}