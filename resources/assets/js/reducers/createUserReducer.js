import { RECV_DATA,RECV_ERROR,ALERT_SUCCESS,ALERT_FAIL } from '../actions/ActionTypes';

export default function createUser(state=[],action){
    switch(action.type){
        case 'CREATE_USER'+RECV_DATA:
        return {
            type:ALERT_SUCCESS,
            msg:'User Created Sucessfully.',
        }
        case 'CREATE_USER'+RECV_ERROR:
        return {
            type:ALERT_FAIL,
            msg:'User not created.',
        }
        default:
        return state;
    }
}