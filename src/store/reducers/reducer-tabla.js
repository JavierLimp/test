import { ACTION_DATA } from '../../constants/store/actions'

const ReducerTable = ( state = {}, action = {} ) => {
    let newState = state;
    const { type, payload } = action;

    console.log("TABLE-state", state );
        console.log("TABLE-action", action );
        console.log("TABLE-payload", payload );

    if( type === ACTION_DATA.SET_ACTION_DATA ){
    }

    console.log("newState", newState );

    return newState
}

export default ReducerTable