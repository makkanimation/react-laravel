import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Image from '../global/Image'
import ToggleComponent from '../ToggleComponent';
export default class UserListComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td><Image srcUrl={this.props.userRecords.avatar} clsName='img-thumbnail small-img-size'/></td>
                <td>{this.props.userRecords.name}</td>
                <td>{this.props.userRecords.email}</td>
                <td><ToggleComponent uID={this.props.userRecords.id} /></td>
            </tr>
        );
    }
} 


UserListComponent.defaultProps = {
    userRecords: []
  };
  
  UserListComponent.propTypes = {
    userRecords: PropTypes.array.isRequired,
    settingStyle: PropTypes.string,
    toggleSettings:PropTypes.func,
}