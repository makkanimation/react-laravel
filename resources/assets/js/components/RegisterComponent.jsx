import React from 'react';
import PropTypes from 'prop-types';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import SelectBox from './global/SelectBox';
import Button from './global/Button';
import DashboardComponent from './DashboardComponent'
export default class RegisterComponent extends React.Component{
    
    render(){
        if(this.props.isLoggedIn || localStorage.getItem('isLoggedIn')){
            return <DashboardComponent />;
        }
        return(
            <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-sm-12 ml-sm-auto col-md-12 pt-3">
                    <h1 className="center-align">Register</h1>
                    <form className='formcls' action=""  onSubmit={this.props.isSubmitForm} >
                    <div className="container">
                        <Input label="Email" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <Input label="Password"  inputType="password" placeHolder="Enter Password" name="password" RequiredField={true}  autoComplete={false} />
                    
                        <Input label="Repeat Password"  inputType="password" placeHolder="Repeat Password" name="psw-repeat" RequiredField={true}  autoComplete={false} />
                        
                        <CheckBoxOrRadio inputType="radio" label="Gender" name="gender" option={['Male','Female']} />
                        
                        <SelectBox label="Country" placeHolder="Select Country" name="country" option={["India","USA","Canada"]}/>
                        <div className="clearfix">
                        <Button inputType="submit" clsName="signupbtn" name="signup" value="Submit" />
                        <Button inputType="button" clsName="cancelbtn" name="back" value="Back" />
                        </div>
                    </div>
                    </form>
                </main>
            </div>
            </div>
        );
    }
} 

RegisterComponent.defaultProps = {
    isLoggedIn:false
}

RegisterComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    isSubmitForm:PropTypes.func
}