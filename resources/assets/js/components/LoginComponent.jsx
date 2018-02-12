import React from 'react';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import Button from './global/Button';
import PropTypes from 'prop-types';
import DashboardComponent from './DashboardComponent'
import AlertMsg from './global/AlertMsg';
import { loggedIn } from '../helpers/authorization';

export default class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailError: this.props.emailError,
            emailCodeDisplay:this.props.emailCodeDisplay,
        }
       this.validate =this.validate.bind(this);
    }
    // hadleSubmit(e){
    //     e.preventDefault();
    //     console.log(e.target.email.value);
    //     console.log(e.target.password.value);
    //     console.log(e.target.gender.checked); 
    //     return false;
    // }

    validate(e){
        //return true;
        let emailValid, passwordValid;
        let error=0;
       //this.props.isSubmitForm(this.refs);
        //this.refs.form.onSubmit(); 
        console.log(this.refs.form.email.value);
        let formI = this.refs.form;
        
        //this.setState({emailError:this.props.emailError});
        //this.setState({emailCodeDisplay:this.props.codeDisplayStyle});

        if(formI.email.required && formI.email.value==''){
            this.setState({emailError: formI.email.name+" cannot be empty"});
            this.setState({emailCodeDisplay: " block"});
            alert("mann");
            alert(this.state.emailCodeDisplay);
            error=1;
            
        }

        
        return false;
        if(e.target.required){
            switch(e.target.type){
              case 'text':
                if(e.target.value==''){
                  this.setState({typed: this.props.label+" cannot be empty"});
                  
                }
              case 'email':
                emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);  
                if(!emailValid){
                  this.setState({typed: this.props.label+" not Valid"});
                  error=1;
                }
                case 'password':
                passwordValid = e.target.value.length>6;  
                if(!passwordValid){
                  this.setState({typed: this.props.label+" is too short"});
                  error=1;
                }
            }
        }
    
        if(error==1){
          this.setState({clsName: this.props.clsName+" error"});
          this.setState({codeDisplayStyle: " block"});
        }
      }

    render(){
        if(loggedIn()){
            this.props.history.push('/dashboard');
        }
        return(
            <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
                    <h1 className="center-align">Login </h1>
                    <form  ref={'form'} className='formcls' action="" onSubmit={this.props.isSubmitForm} >
                    <div className="container">
                        <AlertMsg alertType={this.props.status} alertMsg={this.props.msg}/>
                        <Input label="Email" placeHolder="Enter Email" inputType='email' name="email" RequiredField={true} typedError={this.state.emailError} codeDisplayStyle={this.state.emailCodeDisplay} />
                        <Input label="Password" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} autoComplete={false} />
                        <CheckBoxOrRadio option={['Remember me']} name='gender' inputType='checkbox' />
                        <div className="clearfix">
                        <Button inputType="submit" clsName="signupbtn" name="login" value="Login" submitFunction={this.validate} disabled={this.props.disabled}/>
                        </div>
                    </div>
                    </form>
                </main>
            </div>
            </div>
        );
    }
}

LoginComponent.defaultProps = {
    isLoggedIn:false,
    emailCodeDisplay:'none',
    emailError:'',
    disabled:true,
}

LoginComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    isSubmitForm:PropTypes.func,
    emailError:PropTypes.string,
    emailCodeDisplay:PropTypes.string,
    status:PropTypes.string,
    msg:PropTypes.string,
    disabled:PropTypes.bool
}