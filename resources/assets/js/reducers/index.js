//import { RECV_DATA,RECV_ERROR,ALERT_SUCCESS,ALERT_FAIL } from '../actions/ActionTypes';
import  LoginRequest  from './loginReducer'
import  User  from './UserReducer'
//import listUsers from './listUsersReducer'
import createUser from './createUserReducer'
import editUser from './editUserReducer'
import singleUser from './singleUserReducer'
import { combineReducers } from 'redux';

const webStore = combineReducers({LoginRequest,User});

export default webStore;