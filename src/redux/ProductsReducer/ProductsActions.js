import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SECCESS,
  FETCH_PRODUCTS_FAILURE,
} from './ActionTypes'
import firebase from '../../Firebase'

export const FetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  }
}

export const FetchProductsSeccess = data => {
  return {
    type: FETCH_PRODUCTS_SECCESS,
    payload: data,
  }
}

export const FetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  }
}

export const FetchProducts = () => {
  return dispatch => {
    dispatch(FetchProductsRequest())
    firebase
      .firestore()
      .collection('products')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        dispatch(FetchProductsSeccess(data))
      })
      .catch(error => {
        dispatch(FetchProductsFailure(error))
      })
  }
}
