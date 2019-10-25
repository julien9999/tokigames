import React from 'react';
import { connect } from 'react-redux';
import { setOrder } from '../../actions/orderActions';
import { setFilter } from '../../actions/filterActions';
import { SHOW_ALL_FILTER } from '../../constants/actionTypes';

function Link({ children, onClick }) {
  return (
    <li className="nav-item">
        <a onClick={onClick} className={`nav-link active red`} href="#">
          {children}
        </a>
    </li>
  )
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(setFilter(SHOW_ALL_FILTER))
    dispatch(setOrder(''))
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default function () {
  return (
    <div className='container margin-top-twenty'>
        <div className='row'>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
              <FilterLink>Reset</FilterLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

