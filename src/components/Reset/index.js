import React from 'react';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../actions/orderActions';
import { setFilter } from '../../actions/filterActions';
import { SHOW_ALL_FILTER } from '../../constants/actionTypes';

export default function Reset() {
  const dispatch = useDispatch();

  return (
    <div className='container margin-top-twenty'>
        <div className='row'>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
              <li className="nav-item">
                  <a onClick={() => {
                      dispatch(setFilter(SHOW_ALL_FILTER))
                      dispatch(setOrder(''))
                    }} 
                    className={`nav-link active red`}>
                      Reset
                  </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

