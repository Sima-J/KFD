import { CLOSESETTINGS, OPENSETTINGS } from './ActionTypes'

const initialState = {
  state: false,
}

const SettingsModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPENSETTINGS:
      return {
        ...state,
        state: true,
      }
    case CLOSESETTINGS:
      return {
        ...state,
        state: false,
      }

    default:
      return state
  }
}

export default SettingsModalReducer
