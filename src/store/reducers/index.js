import { ACTION_DATA } from '../../constants/store/actions'

const ReducerGenenral = async ( state = {}, action = {} ) => {
    let newState = state;
    const { type, payload } = action;
    console.log("TABLE-action", action );
    
    if( type === ACTION_DATA.SET_ACTION_DATA ){
        console.log("TABLE-state", state );
        console.log("TABLE-payload", payload );

    }

    console.log("newState", newState );

    return newState
}

export default ReducerGenenral