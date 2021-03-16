import { createStore, applyMiddleware, compose } from "redux";
import persistState, { mergePersistedState }     from 'redux-localstorage';

import thunk   from "redux-thunk";
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter  from 'redux-localstorage-filter';

import ReductoresCombinados from './reducers/index'

import { KEY_STORAGE_AND_FILTER_KEYS_PERSISTED } from '../constants/store/store';

/* NOTE: Estado inicial del store */
import  { INITIAL_STATE_STORE } from './state-store.js';

const middleware = store => next => async action => next( action )

/* NOTE: Reidratacion del store con los datos almacenados en el session storage */
const REDUCER = compose ( mergePersistedState() )( ReductoresCombinados );
/**NOTE: Declaración de persistencia en el sessionStorage */
const STORAGE = compose ( filter( KEY_STORAGE_AND_FILTER_KEYS_PERSISTED.filter_keys_persisted_state ) ) ( adapter( sessionStorage ) );

const CREATE_PERSISTENT_STORE = compose (
    persistState( STORAGE, KEY_STORAGE_AND_FILTER_KEYS_PERSISTED.key_session_storage ),
    
    applyMiddleware( thunk, middleware )

) ( createStore );

let store = CREATE_PERSISTENT_STORE ( REDUCER, INITIAL_STATE_STORE, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;


