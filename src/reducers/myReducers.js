import {combineReducers} from 'redux'
import UserReducer from './UserReducer';

const myReducers = combineReducers({
    userReducer: UserReducer
})

export default myReducers;
