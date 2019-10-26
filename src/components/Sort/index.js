import React from 'react';
import { setFilter } from '../../actions/filterActions';
import { SHOW_ALL_FILTER, SHOW_CHEAP, SHOW_BUSINESS } from '../../constants/actionTypes';
import FilterLink from '../FilterLink'

export default function Sort() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12'> 
            <h5 class="card-title margin-top-twenty">Sort options:</h5>
          </div>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
              <FilterLink action={setFilter} type={SHOW_ALL_FILTER} property="filter">All</FilterLink>
              <FilterLink action={setFilter} type={SHOW_CHEAP} property="filter">Cheap</FilterLink>
              <FilterLink action={setFilter} type={SHOW_BUSINESS} property="filter">Business</FilterLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

