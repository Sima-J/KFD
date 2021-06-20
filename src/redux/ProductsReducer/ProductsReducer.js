import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SECCESS, FETCH_PRODUCTS_FAILURE } from './ActionTypes';

const initialState = {
    loading: false,
    data: [],
    product: {}
}

const ProductReducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SECCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
       case FETCH_PRODUCTS_FAILURE:
           return {
               ...state,
               loading: false,
               error: action.payload
           }
        default: return state
    }
}

export default ProductReducer