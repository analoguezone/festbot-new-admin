import { createStore, compose, applyMiddleware } from 'redux';


import reducers from './reducers/index.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store = createStore(reducers);

export default store;
