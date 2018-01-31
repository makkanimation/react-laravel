import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../containers/HeaderContainer';
import NavComponent from './includes/NavComponent';
import UploadPic from './global/UploadPic';
import Input from './global/Input';
import CheckBoxOrRadio from './global/CheckBoxOrRadio';
import SelectBox from './global/SelectBox';
import TextArea from './global/TextArea';
import Button from './global/Button';
import {ALERT_SUCCESS, ALERT_FAIL } from '../actions/ActionTypes'
import AlertMsg from './global/AlertMsg';

export default class EditUserComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.userRecords.length==0){
            return null;
        }
        return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                    <h1 className="center-align">Edit User</h1>
                    <form className='formcls' action=""  onSubmit={this.props.isSubmitForm}>
                    <div className="container">
                        <AlertMsg alertType={this.props.alertType} alertMsg={this.props.alertMsg}/>

                        <UploadPic srcUrl={this.props.userRecords.avatar} />
                        <Input label="First Name" placeHolder="Enter First Name" name="fname" RequiredField={true} value={this.props.userRecords.first_name}/>
                        <Input label="Last Name" placeHolder="Enter Last Name" name="lname" RequiredField={true}  value={this.props.userRecords.last_name} />
                        <Input label="Designation" placeHolder="Enter Designation" name="designation"   value='' />
                        <Input label="Email" inputType="email" placeHolder="Enter Email" name="email" />
                        <Input label="Phone No" placeHolder="Enter Phone No" name="phoneno"  />
                        <Input label="Address" placeHolder="Enter Your Address" name="address"  />
                        <Input label="Zip Code" placeHolder="Enter Zip Code" name="zip"  />
                        <CheckBoxOrRadio inputType="radio" label="Gender" name="gender" option={['Male','Female']} />
                        <SelectBox label="Country" placeHolder="Select Country" name="country" option={["India","USA","Canada"]}/>
                        <TextArea label="Tell me About Yourself" placeHolder="Tell me About Yourself" name="selfDescription" value="" />
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

EditUserComponent.defaultProps = {
    userRecords: [],
    alertType:''
};
  
EditUserComponent.propTypes = {
    userRecords: PropTypes.array.isRequired,
    isSubmitForm:PropTypes.func,
    alertType: PropTypes.string,
    alertMsg: PropTypes.string
}
