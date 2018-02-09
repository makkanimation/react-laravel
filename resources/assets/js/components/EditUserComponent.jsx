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
import { COUNTRY_LIST } from '../helpers/countries';
export default class EditUserComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.alertType==ALERT_SUCCESS)
        {
            this.props.history.push('/users');
        }
        if(this.props.userRecords.length==0){
            return null;
        }

        let fn;
        let ln;
        if(this.props.userRecords.name && this.props.userRecords.name!=''){
            let sp = this.props.userRecords.name.split(' ');
            fn = sp[0];
            if(sp.length>1){
                ln = this.props.userRecords.name.replace(sp[0]+" ","");
            }else{
                ln = '';
            }
        }else{
            fn = '';
            ln = '';
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
                        <Input label="First Name" placeHolder="Enter First Name" name="fname" RequiredField={true} value={fn}/>
                        <Input label="Last Name" placeHolder="Enter Last Name" name="lname" RequiredField={true}  value={ln} />
                        <Input label="Designation" placeHolder="Enter Designation" name="designation"   value={this.props.userRecords.designation} />
                        <Input label="Email" inputType="email" placeHolder="Enter Email" name="email" value={this.props.userRecords.email} />
                        <Input label="Phone No" placeHolder="Enter Phone No" name="phoneno" value={this.props.userRecords.phone} />
                        <Input label="Address" placeHolder="Enter Your Address" name="address" value={this.props.userRecords.address} />
                        <Input label="Zip Code" placeHolder="Enter Zip Code" name="zip" value={this.props.userRecords.postal_code} />
                        <CheckBoxOrRadio inputType="radio" label="Gender" name="gender" option={['Male','Female']} />
                        <SelectBox label="Country" placeHolder="Select Country" name="country" option={COUNTRY_LIST}  selValue={this.props.userRecords.country} />
                        <TextArea label="Tell me About Yourself" placeHolder="Tell me About Yourself" name="selfDescription"  value={this.props.userRecords.description} />
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
    userRecords: PropTypes.object.isRequired,
    isSubmitForm:PropTypes.func,
    alertType: PropTypes.string,
    alertMsg: PropTypes.string
}
