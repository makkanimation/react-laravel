import * as types from './actionTypes';
import axios from 'axios';
import { getToken } from '../helpers/authorization'

function requestData(actionType) {
	return {type: actionType + types.REQ_DATA}
};

function receiveData(actionType, json,params) {
	//console.log("fetch data");
	//console.log(json);
	return{
		type: actionType + types.RECV_DATA,
		data: json,
		params:params,
	}
};

function receiveError(actionType, json) {
	//console.log("fetch error");
	//console.log(json);
	return {
		type: actionType + types.RECV_ERROR,
		data: json
	}
};

function getDomain(path){
	return 'http://localhost:8000/api/'+path;
}

export function fetchData(domain, actionType, method, params ) {
	
	console.log(params);
	let url = getDomain(domain);
	let token = getToken();
	return function(dispatch) {
		dispatch(requestData(actionType));
		let config = {
			url: url,
			method: method || 'get',
			timeout: 20000,
			responseType: 'json',
			data: params,
			headers: { Authorization: "Bearer " + token }
		}
		console.log('config');
		console.log(config);
		return axios(config)
			.then(function(response) {
				dispatch(receiveData(actionType, response.data,params));
			})
			.catch(function(response){
				dispatch(receiveError(actionType, response.data));
			})
	}
};

export function logOutAction(actionType){
	return{
		type:actionType
	}
}
