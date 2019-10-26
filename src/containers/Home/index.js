import React from 'react';
import { useSelector } from 'react-redux';

import Loader from '../../components/Loader';
import NavBar from '../../components/NavBar';
import Add from '../../components/Add';
import Sort from '../../components/Sort';
import Order from '../../components/Order';
import Reset from '../../components/Reset';
import Flights from '../../components/Flights';
import Footer from '../../components/Footer';

export default function App(props) {
  const { loading, content } = useSelector(state => state.content);
  
  return (
    <>
      { loading === -1
        ? <Loader message='Loading...' />
        :  <>
            <NavBar />
            <Add />
            <Sort />
            <Order />
            <Reset />
            <Flights flights={content} />
            <Footer />
          </>
      }
    </>
  );
}