import React from 'react';
import Input from '../components/global/Input';
import CheckBoxOrRadio from '../components/global/CheckBoxOrRadio';
import Button from '../components/global/Button';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'
import HeaderContainer from './HeaderContainer';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    
    hadleSubmit(e){
        e.preventDefault();
        let fn = fetchData(
            'login', 
            'LOGIN', 
            'POST', 
            {
              "email": e.target.email.value,
              "password": e.target.password.value
            } 
          );
          
          this.props.dispatch(fn);
      }

    render(){
        return(<div><HeaderContainer/><LoginComponent history={this.props.history} isSubmitForm={this.hadleSubmit} status={this.props.status} msg={this.props.msg} /></div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        status:state.LoginRequest.status,
        msg:state.LoginRequest.msg
    }
};
export default connect(mapStateToProps)(LoginContainer);