import { combineReducers } from "redux";

import ReducerGeneral from '../reducers/index'

import ReducerTable from '../reducers/reducer-tabla'

const reducersCombined = combineReducers( {
    dataTable : ReducerTable
} );

const ReductoresCombinados = ( state = {}, action = {} ) => ReducerGeneral( state, action, reducersCombined );

export default ReductoresCombinados
