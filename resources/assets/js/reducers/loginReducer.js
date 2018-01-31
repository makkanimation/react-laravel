import { RECV_DATA, RECV_ERROR, ALERT_SUCCESS,ALERT_FAIL  } from '../actions/ActionTypes';
import {setToken,removeToken} from '../helpers/authorization';

const defaultState ={
    token:null,
    status:'',
    msg:''
}
export default function LoginRequest(state=defaultState,action){
    switch(action.type){
        case 'LOGIN'+RECV_DATA: case 'REGISTER'+RECV_DATA:
        setToken(action.data.data.token);
        return {
            token:action.data.data.token,
            status:ALERT_SUCCESS
        }
        case 'LOGIN'+RECV_ERROR: case 'REGISTER'+RECV_ERROR:
        return Object.assign({},state,{
            ...state,
            status:ALERT_FAIL,
            msg:'Invalid Credentials.'
        })
        case 'LOGOUT':
        //console.log(state);
        removeToken();
        return {
            token:null,
            status:'',
            msg:''
        }
        default:
            return state;
    }
}