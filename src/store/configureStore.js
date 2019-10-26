import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import initialState from '../reducers/initialState';
import createStorageMiddleware, {
  getStorageState
} from 'redux-simple-storage-middleware';


const localStorageMiddleware = createStorageMiddleware({
    key: 'tokigames-session-storage',
    type: 'sessionStorage'
});

const storageState = getStorageState({
    key: 'tokigames-session-storage',
    type: 'localStorage',
    defaultReponse: initialState
});

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = createLogger();

function configureStoreProd() {
  const middlewares = [
    localStorageMiddleware,
    thunk
  ];

  return createStore(rootReducer, storageState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev() {
  const middlewares = [
    localStorageMiddleware,
    thunk,
    logger
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}

/**
 * Test Store
 *
 * Use this when your testing components
 * if state relies to store.
 * Ex: Submitting button and get state
 * from the store
 *
 * @export
 * @param {any} initialState
 * @returns
 */
export function configureTestStore(initialState) {
  const middlewares = [
    thunk
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
