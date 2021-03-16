/* import isArray   from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';

const customizer = ( state, cloneState ) =>{
    if( isArray( state ) ) {
        return cloneState;
    }
    return undefined;
} */

const ReducerGeneral = ( state = { }, action = {}, reducersCombined ) => {
    let newState = state

    console.log("state-GENERAL", state );
    console.log("action-GENERAL", action );
    console.log("newState-GENERAL", newState );

    //const { payload } = action

    //newState = mergeWith( state, payload, customizer );

    return reducersCombined( { ...newState , action });
}

export default ReducerGeneral
