import _ from 'lodash';
import { getFlightsCheap, getFlightsBusiness } from '../api/content';
import * as types from '../constants/actionTypes';

function getContentSuccess(payload) {
  return { type: types.CONTENT_UPDATE_SUCCESS, payload };
}

function getContentError() {
  return { type: types.CONTENT_UPDATE_ERROR };
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
          duration: element.arrival - element.departure,
          type: 'cheap',
        })),
        ...response[1].data.data.map((element) => ({ 
          duration: element.arrivalTime - element.departureTime,
          arrival: element.arrivalTime,
          departure: element.departureTime,
          route: `${element.arrival}-${element.departure}`,
          type: 'business' 
        }))
      ];

      dispatch(getContentSuccess(data));
    })
    .catch(err => {
      dispatch(getContentError());
    });
  };
};
