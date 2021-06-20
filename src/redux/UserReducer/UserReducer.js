import { FETCH_USER_REQUEST, FETCH_USER_SECCESS, FETCH_USER_FAILURE, FETCH_USER_EXISTS } from './ActionTypes';

const initialState = {
    loading: false,
    exist: false,
    user: {},
    error: ''
}

const UserReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                exist: false,
            }
        case FETCH_USER_SECCESS:
            return {
                ...state,
                loading: false,
                exist: true,
                user: action.payload
            }
        case FETCH_USER_EXISTS:
            return {
                loading: false,
                user: {}
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default UserReducer