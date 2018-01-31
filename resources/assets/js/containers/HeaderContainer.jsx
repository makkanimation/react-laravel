import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/includes/HeaderComponent';
import { logOutAction } from '../actions/index';
import { Route, Redirect } from 'react-router'
class HeaderContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            settingStyle:{
                display:'none'
            }, show:false
        }

        this.isLogout = this.isLogout.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
    }

    isLogout(e){
       // e.preventDefault();
       // console.log("logout ");
       // this.toggleSettings();
       // this.props.dispatch(logOutAction('LOGOUT'));
       // this.props.history.push('/login');
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

    render(){
        return(<HeaderComponent toggleSettings={this.toggleSettings} settingStyle={this.state.settingStyle} />);
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        status:state.LoginRequest.status,
    }
}

//console.log(HeaderContainer);
export default connect(mapStateToProps)(HeaderContainer);