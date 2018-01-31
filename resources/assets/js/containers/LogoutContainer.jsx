import React from 'react';
import { connect } from 'react-redux';
//import HeaderComponent from '../components/includes/HeaderComponent';
import { logOutAction } from '../actions/index';
class LogoutContainer extends React.Component{
    constructor(props){
        super(props);
        this.isLogout();
    }

    isLogout(){
       this.props.dispatch(logOutAction('LOGOUT'));
       this.props.history.push('/login');
    }

    render() { 
        return false; 
    }
}

export default connect()(LogoutContainer);