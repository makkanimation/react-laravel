import { RECV_DATA,RECV_ERROR,ALERT_SUCCESS,ALERT_FAIL } from '../actions/ActionTypes';

export default function editUser(state=[],action){
    switch(action.type){
        case 'EDIT_USER'+RECV_DATA:
        return {
            type:ALERT_SUCCESS,
            msg:'User updated Sucessfully.',
        }
        case 'EDIT_USER'+RECV_ERROR:
        return {
            type:ALERT_FAIL,
            msg:'User not updated.',
        }
        default:
        return state;
    }
}