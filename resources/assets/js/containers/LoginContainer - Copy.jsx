import React from 'react';
import Input from '../components/global/Input';
import CheckBoxOrRadio from '../components/global/CheckBoxOrRadio';
import Button from '../components/global/Button';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'
class LoginContainer extends React.Component{
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
            'https://reqres.in/api/login', 
            'LOGIN', 
            'POST', 
            {
              "email": "peter@klaven",
              "password": "cityslicka"
            } 
          );
          
          this.props.dispatch(fn)
        //console.log(state);
       // return false;
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
                    <h1 className="center-align">Login</h1>
                    <form className='formcls' action="" onSubmit={this.hadleSubmit} >
                    <div className="container">
                        <Input label="Email" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <Input label="Password" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} autoComplete={false} />
                        <CheckBoxOrRadio option={['Remember me']} name='gender' inputType='checkbox' />
                        <div className="clearfix">
                        <Button inputType="submit" clsName="signupbtn" name="login" value="Login" />
                        </div>
                    </div>
                    </form>
                </main>
            </div>
            </div>
        );
    }
} 
export default connect()(LoginContainer);