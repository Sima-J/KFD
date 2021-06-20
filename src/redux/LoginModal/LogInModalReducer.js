import { OPEN, CLOSE } from './ActionTypes'

const initialState = {
  state: false,
  isAddItem: false,
}

const LogInModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        state: true,
        isAddItem: action.payload,
      }
    case CLOSE:
      return {
        ...state,
        state: false,
        isAddItem: false,
      }

    default:
      return state
  }
}

export default LogInModalReducer
