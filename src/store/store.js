import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index.js';
//import { firstFunction } from './sagas/user';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(
        applyMiddleware(sagaMiddleware))
);

//sagaMiddleware.run(firstFunction)

export default store;
