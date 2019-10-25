import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import NavBar from '../../components/NavBar';
import Order from '../../components/Order';
import Reset from '../../components/Reset';
import Sort from '../../components/Sort';
import Flights from '../../components/Flights';

function App(props) {
  const { updateState, content } = props.content;

  return (
    <>
      { updateState === -1
        ? <Loader message='Loading...' />
        :  <>
            <NavBar />
            <Sort />
            <Order />
            <Reset />
            <Flights flights={content} />
          </>
      }
    </>
  );
}

App.propTypes = {
  content: PropTypes.object
};

function mapStateToProps({ content }) {
  return {
    content
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
