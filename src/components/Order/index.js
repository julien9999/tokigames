import React from 'react';
import { setOrder } from '../../actions/orderActions';
import { SHOW_DURATION, SHOW_STARTTIME, SHOW_ENDTIME } from '../../constants/actionTypes';
import FilterLink from '../FilterLink'

export default function Order() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12'> 
            <h5 class="card-title margin-top-twenty">Order options:</h5>
          </div>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
              <FilterLink action={setOrder} type={SHOW_DURATION} property="order">Duration</FilterLink>
              <FilterLink action={setOrder} type={SHOW_STARTTIME} property="order">Start Time</FilterLink>
              <FilterLink action={setOrder} type={SHOW_ENDTIME} property="order">End Time</FilterLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

