import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import CreateUserComponent from '../components/CreateUserComponent'
import HeaderContainer from './HeaderContainer';
class CreateUserContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    hadleSubmit(e){
        console.log(e.target.fname.value);
        console.log(e.target.lname.value);
        e.preventDefault();
       // return false;
        let fn = fetchData(
            'https://reqres.in/api/users', 
            'CREATE_USER', 
            'POST', 
            {
              "name": e.target.fname.value+' '+e.target.lname.value,
              "job": e.target.designation.value
            } 
          );
          //console.log(fn);
          this.props.dispatch(fn)
      }

    render(){
        return(<div><HeaderContainer/><CreateUserComponent isSubmitForm={this.hadleSubmit} alertType={this.props.alertType} alertMsg={this.props.alertMsg} /></div>
        );
    }
} 

const mapStateToProps = state => {
    //console.log("Create User");
    //console.log(state.createUser.type);
    return {
       alertType: state.User.type,
       alertMsg: state.User.msg,
    }
};
export default connect(mapStateToProps)(CreateUserContainer);