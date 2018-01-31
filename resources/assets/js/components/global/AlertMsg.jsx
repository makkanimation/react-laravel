import React from 'react';
import PropTypes from 'prop-types'
import {ALERT_SUCCESS, ALERT_FAIL,ALERT_WARNING } from '../../actions/ActionTypes'
export default class AlertMsg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            settingStyle:{
                display:'block'
            }, show:true
        }

        this.closeButton = this.closeButton.bind(this);
    }

    closeButton(e)
    {
        if(this.state.show){
            this.setState({
                show:false,
                settingStyle:{
                    display:'none'
                }
            })
        }else{
            this.setState({
                show:true,
                settingStyle:{
                    display:'block'
                }
            })
        }
    }

    render(){
        if(this.props.alertType==''){
            return null;
        }
        
        let alert;
        let alMsg;
        if(this.props.alertType==ALERT_SUCCESS){
            alert = 'alert alert-success alert-dismissible fade show';
            alMsg = 'Success';
        }else if(this.props.alertType==ALERT_FAIL){
            alert = 'alert alert-danger alert-dismissible fade show';
            alMsg = 'Fail';
        }else if(this.props.alertType==ALERT_WARNING){
            alert = 'alert alert-warning alert-dismissible fade show';
            alMsg = 'Warning';
        }
        return(
            <div className={alert} role="alert" style={this.state.settingStyle} >
            <a href="#" className="close" data-dismiss="alert" aria-label="close" onClick={this.closeButton} >&times;</a>
            <strong>{alMsg}!</strong> {this.props.alertMsg}
            </div>
        );
    }
}

AlertMsg.propTypes = {
    alertType:PropTypes.string,
    alertMsg:PropTypes.string
}