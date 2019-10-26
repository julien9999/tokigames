import React from 'react';
import PropTypes from 'prop-types';

export default function Loader({ message }) {
  return (
    <div className="loader-wrapper">
      <div className="loader-inner">
        <div className="spinner-border" role="status">
          <span className="sr-only" />
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}

Loader.propTypes = {
  i18n: PropTypes.object,
};