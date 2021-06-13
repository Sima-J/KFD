import { combineReducers } from 'redux'
import petReducer, {
  langReducer,
} from './petReducer'
import user from './user'
import { updateView } from '../comments/reducer'

export default combineReducers({
  langReducer,
  pets: petReducer,
  user,
  updateView,
  
})