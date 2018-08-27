import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import ReducerUser from './reducerUser.js';
import ReducerArtists from './reducerArtists.js';
import ReducerAuth from './reducerAuth.js';
import ReducerEvents from './reducerEvents.js';
import ReducerPois from './reducerPois.js';


const rootReducer = combineReducers({

	form: formReducer,
	user: ReducerUser,
	artist: ReducerArtists,
	auth: ReducerAuth,
	events: ReducerEvents,
	pois: ReducerPois,

});

export default rootReducer;