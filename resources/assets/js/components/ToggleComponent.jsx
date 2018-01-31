import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default class ToggleComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            settingStyle:{
                display:'none'
            }, show:false
        }
        this.toggleSettings = this.toggleSettings.bind(this);
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
        return (
            <div className="dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#" onClick={this.toggleSettings}>Settings <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu"  style={this.state.settingStyle} >
                    <li><Link  to={'/profile/'+this.props.uID }  className="nav-link">View Profile</Link></li>
                    <li><Link to={'/users/edit/'+this.props.uID} className="nav-link">Edit</Link></li>
                    <li><a href="#" >Delete</a></li>
                </ul>
            </div>
        );
    }
}

  
ToggleComponent.propTypes = {
    uID : PropTypes.number.isRequired,
}