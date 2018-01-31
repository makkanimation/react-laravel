import { RECV_DATA,RECV_ERROR,ALERT_SUCCESS,ALERT_FAIL } from '../actions/ActionTypes';

export default function singleUser(state=[],action){
    
    console.log('single action');
       
    switch(action.type){
        case 'SINGLE_USER'+RECV_DATA:
        return {
            data:action.data.data,
        }
        default:
        return state;
    }
}