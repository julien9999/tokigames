import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ({ action, type, children, property }) {
  const active = useSelector(state => type === state[property]);
  const dispatch = useDispatch();

  return (
    <li className="nav-item">
        <a 
          onClick={() => dispatch(action(type))}
          className={`nav-link ${active ? 'active' : null}`} 
        >
          {children}
        </a>
    </li>
  )
}