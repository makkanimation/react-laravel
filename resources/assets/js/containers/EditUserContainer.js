import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import EditUserComponent from '../components/EditUserComponent'
import HeaderContainer from './HeaderContainer';

class EditUserContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
        this.getSingleUser();
    }

    getSingleUser(){
        let fn = fetchData(
            'user/'+this.props.match.params.id, 
            'SINGLE_USER', 
            'get',''
        );
          
        this.props.dispatch(fn)
    }

    hadleSubmit(e){
        e.preventDefault();
       // console.log(e.target.gender);
        let fn = fetchData(
            'user/'+this.props.match.params.id, 
            'EDIT_USER', 
            'PUT', 
            {
              "name": e.target.fname.value+' '+e.target.lname.value,
              "designation": e.target.designation.value,
              "email": e.target.email.value,
              "phoneno": e.target.phoneno.value,
              "address": e.target.address.value,
              "zip": e.target.zip.value,
              //"gender": e.target.gender.value,
              "country": e.target.country.value,
              "selfDescription": e.target.selfDescription.value,
            } 
          );
          this.props.dispatch(fn)
      }

    render(){
        return(<div><HeaderContainer/><EditUserComponent history={this.props.history} isSubmitForm={this.hadleSubmit} alertType={this.props.alertType} alertMsg={this.props.alertMsg} userRecords={this.props.userRecords} /></div>
        );
    }
} 

const mapStateToProps = state => {
   // console.log('Edit');
   // console.log(state.User);
    return {
        alertType: state.User.type,
        alertMsg: state.User.msg,
        userRecords: state.User.singleUser,
    }
    
};
export default connect(mapStateToProps)(EditUserContainer);