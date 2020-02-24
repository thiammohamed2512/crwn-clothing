import { combineReducers } from 'redux' 
import UserReducer from './userReduxer' 

export default combineReducers({
    user: UserReducer
})