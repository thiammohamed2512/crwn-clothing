import { combineReducers } from 'redux' 
import UserReducer from './user/userReduxer' 

export default combineReducers({
    user: UserReducer
})