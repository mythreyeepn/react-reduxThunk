import * as types from '../actions/type'

const defaultState = {
    users: [],
    userAdded: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case types.GET_RECORDS:
            return {
                ...state,
                userAdded:false,
                users: action.payload ? action.payload : []
            }
        case types.ADDED_SUCCESSFULLY:
            return {
                ...state,
                userAdded:true,
            }    
        default:
            return state;
    }

}