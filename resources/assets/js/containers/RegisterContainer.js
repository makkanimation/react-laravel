import React from 'react';
import { connect } from 'react-redux'
import RegisterComponent from '../components/RegisterComponent'
import { fetchData } from '../actions/index';
import HeaderContainer from './HeaderContainer';

class RegisterContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    hadleSubmit(e){
        e.preventDefault();
        //localStorage.setItem('email',e.target.email.value);
        //localStorage.removeItem('email',e.target.email.value);
        //console.log("fffff "+localStorage.getItem('email'));
       // console.log(e.target.email.value);
        //console.log(e.target.password.value);
       // console.log(e.target.gender.checked); 
        //let fn = fetchData('https://reqres.in/api/login','LOGIN','POST',{
           //'email':e.target.email.value,
         //  'password':e.target.password.value,
       // });
        //let fn = ;
        let fn = fetchData(
            'https://reqres.in/api/register', 
            'REGISTER', 
            'POST', 
            {
              "email": "peter@klaven",
              "password": "cityslicka"
            } 
          );
          
          this.props.dispatch(fn)
      }

    render(){
        return(<div><HeaderContainer/><RegisterComponent  isSubmitForm={this.hadleSubmit} isLoggedIn={this.props.isLoggedIn} /></div>);
    }
}

const mapStateToProps = state => {
    console.log('register');
    console.log();
    return {
        isLoggedIn: state.LoginRequest.isLoggedIn,
    }
};

export default connect(mapStateToProps)(RegisterContainer)