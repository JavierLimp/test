import { ACTION_DATA } from '../../constants/store/actions'

const reductor = ( state = {}, action = {} ) => {
    let newState = state;
    const { type } = action;

    if( type === ACTION_DATA.SET_ACTION_DATA ){
        const { payload } = action
        newState = { ...state, ['dataTable'] : payload }
    }
    return newState
}

export default reductor
