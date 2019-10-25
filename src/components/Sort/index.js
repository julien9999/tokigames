import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/filterActions';
import { SHOW_ALL_FILTER, SHOW_CHEAP, SHOW_BUSINESS } from '../../constants/actionTypes';

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
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.filter))
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
            <h5 class="card-title margin-top-twenty">Sort options:</h5>
          </div>
          <div className='col-12'>       
            <ul class="nav nav-pills nav-fill">
            <FilterLink filter={SHOW_ALL_FILTER}>All</FilterLink>
            <FilterLink filter={SHOW_CHEAP}>Cheap</FilterLink>
            <FilterLink filter={SHOW_BUSINESS}>Business</FilterLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

