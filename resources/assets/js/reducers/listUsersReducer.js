import { RECV_DATA } from '../actions/ActionTypes';

export default function listUsers(state=[],action){
    switch(action.type){
        case 'USER_LIST'+RECV_DATA:
          console.log(action.data.page);  
          return {
            page:action.data.page,
            per_page:action.data.per_page,
            total:action.data.total,
            total_pages:action.data.total_pages,
            data:action.data.data,
          }
        return action;
        default:
        return state;
    }
}