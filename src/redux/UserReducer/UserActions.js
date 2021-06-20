import { FETCH_USER_REQUEST, FETCH_USER_SECCESS, FETCH_USER_EXISTS, FETCH_USER_FAILURE } from './ActionTypes';
import firebase from '../../Firebase'

export const FetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const FetchUserSeccess = user => {
    return {
        type: FETCH_USER_SECCESS,
        payload: user
    }
}

export const FetchUserExist = () => {
    return {
        type: FETCH_USER_EXISTS
    }
}

export const FetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const FetchUser = id => {
    return (dispatch) => {
        dispatch(FetchUserRequest())
        firebase
            .firestore()
            .collection('users')
            .doc(id)
            .get()
            .then(doc => {
                if(doc.exists) {
                    dispatch(FetchUserSeccess(doc.data))
                } else {
                    dispatch(FetchUserExist())
                }
            })
            .catch(error => dispatch(FetchUserFailure(error)))
    }
}