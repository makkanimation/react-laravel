import React from 'react';
import UsersComponent from '../components/UsersComponent';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';
class UserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            settingStyle:{
                display:'none'
            }, show:false
        }
        console.log('check again');
        this.getUserList(1);
       this.toggleSettings = this.toggleSettings.bind(this);
       this.getPage = this.getPage.bind(this);
    }

    toggleSettings(){
        if(!this.state.show){
            this.setState({
                show:true,
                settingStyle:{
                    display:'block'
                }
            })
        }else{
            this.setState({
                show:false,
                settingStyle:{
                    display:'none'
                }
            })
        }
    }

    getPage(e){
        this.getUserList(e.target.text);
    }
    
    getUserList(page){
        console.log("Mann");
        console.log(page);
        let fn = fetchData(
            'users/?page='+page, 
            'USER_LIST', 
            'get', 
            {} 
        );
          
        this.props.dispatch(fn)
    }

    render(){
        return(<div><HeaderContainer/><UsersComponent userRecords={this.props.userRecords}  totalPage={this.props.totalPage} getPage={this.getPage} toggleSettings={this.toggleSettings} settingStyle={this.state.settingStyle} /></div>);
    }
}


const mapStateToProps = state => {
    return {
        userRecords: state.User.userList.data,
        totalPage:state.User.userList.total_pages,
    }
};

export default connect(mapStateToProps)(UserContainer);