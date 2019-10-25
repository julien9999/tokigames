import React from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../actions/orderActions';
import { SHOW_DURATION, SHOW_STARTTIME, SHOW_ENDTIME } from '../../constants/actionTypes';

function Link({ active, children, onClick }) {
  return (
    <li className="nav-item">
        <a onClick={onClick} className={`nav-link ${active ? 'active' : null}`} href="#">
          {children}
        </a>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.order === state.order
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setOrder(ownProps.order))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default function () {
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-12'> 
            <h5 class="card-title margin-top-twenty">Order options:</h5>
          </div>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
              <FilterLink order={SHOW_DURATION}>Duration</FilterLink>
              <FilterLink order={SHOW_STARTTIME}>Start Time</FilterLink>
              <FilterLink order={SHOW_ENDTIME}>End Time</FilterLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

