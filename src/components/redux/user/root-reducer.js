import { combineReducers } from 'redux' 
import UserReducer from './userReducer' 
import CartReducer from '../cart/cart.reducer'

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
})