import { lOGOUT, LOGIN } from './ActionTypes'

const localData = JSON.parse(localStorage.getItem('loggedInUser'))

const LogedInUser = localData
  ? { userState: true, data: localData }
  : { userState: false, data: {} }

const initialState = {
  isLoggedIn: LogedInUser.userState,
  user: LogedInUser.data,
}

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      }
    case lOGOUT:
      return {
        user: {},
        isLoggedIn: false,
      }

    default:
      return state
  }
}

export default AuthenticationReducer
