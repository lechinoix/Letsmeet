import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = [
  applyMiddleware(...middlewares),
];

const store = createStore(rootReducer, {}, composeEnhancers(...enhancers));

sagaMiddleware.run(sagas);

export default store;
