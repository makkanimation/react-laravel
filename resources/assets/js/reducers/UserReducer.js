import { RECV_DATA,RECV_ERROR,ALERT_SUCCESS,ALERT_FAIL } from '../actions/ActionTypes';

const defaultState ={
    userList:{
        page:0,
        per_page:0,
        total:0,
        total_pages:0,
        data:[]
    },
    type:'',
    msg:'',
    singleUser:[],
    userEdit:[]
}
export default function User(state=defaultState,action){
    switch(action.type){
        case 'USER_LIST'+RECV_DATA:
            return Object.assign({}, state, {
                userList:{
                    page:action.data.current_page,
                    per_page:action.data.per_page,
                    total:action.data.total,
                    total_pages:action.data.last_page,
                    data:action.data.data,
                }
            })
        case 'CREATE_USER'+RECV_DATA:
            return Object.assign({},state,{
                type:ALERT_SUCCESS,
                msg:'User Created Sucessfully.',
        })
        case 'CREATE_USER'+RECV_ERROR:
            return Object.assign({},state,{
                    type:ALERT_FAIL,
                    msg:'User not created.',
        })
        case 'SINGLE_USER'+RECV_DATA:
        console.log('single user');    
        console.log(action.data);
            return Object.assign({},state,{
                singleUser: action.data
        })
        case 'EDIT_USER'+RECV_DATA:
        return Object.assign({},state,{
                    type:ALERT_SUCCESS,
                    msg:'User updated Sucessfully.',
        })
        case 'EDIT_USER'+RECV_ERROR:
        return Object.assign({},state,{
                    type:ALERT_FAIL,
                    msg:'User not updated.',
        })
        default:
        return state
    }
}