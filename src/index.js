import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { loadContents } from './actions/contentActions';
import configure from './store/configureStore';
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage';

import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.scss';


const store = configure();
persistStore(store, {
    storage,
    keyPrefix: 'tokigames.'
  });
    
  store.dispatch(loadContents());
  ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    ,
    document.getElementById('root')
  );
  