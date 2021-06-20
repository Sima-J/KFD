import { combineReducers } from 'redux'
import ProductsReducer from './ProductsReducer/ProductsReducer'
import UserReducer from './UserReducer/UserReducer'
import AuthenticationReducer from './Authentication/AuthenticationReducer'
import LogInModalReducer from './LoginModal/LogInModalReducer'
import SettingsModalReducer from './LoginModal/SettingsModalReducer'

const RootReducer = combineReducers({
  authentication: AuthenticationReducer,
  user: UserReducer,
  products: ProductsReducer,
  LogInModal: LogInModalReducer,
  SettingsModal: SettingsModalReducer,
})

export default RootReducer
