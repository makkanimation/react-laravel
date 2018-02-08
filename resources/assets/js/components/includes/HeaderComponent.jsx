import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loggedIn } from '../../helpers/authorization';
export default class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header className="sd-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <Link to={this.props.homeLink} className="nav-link">React Dashboard</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    { (loggedIn()) && <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                    </li>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#"  onClick={this.props.toggleSettings} >Settings <span className="caret" ></span></a>
                            <ul className="dropdown-menu" role="menu" style={this.props.settingStyle}>
                            <li><Link to='/profile/1' >Profile</Link></li>
                            <li><Link to='/users' >Users</Link></li>
                            <li><Link to='/logout' >Logout</Link> </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to='/user/create' className="nav-link">Create User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/user/edit/1' className="nav-link">Edit User</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    }

                    { (!loggedIn()) &&  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    </ul>
                    }

                    </div>
                </nav>
            </header>
        );
    }
}

HeaderComponent.defaultProps = {
    homeLink:'/'
  };

  HeaderComponent.propTypes = {
    status: PropTypes.string,
    homeLink: PropTypes.string,
    settingStyle: PropTypes.object,
    isLoggedOut:PropTypes.func,
    toggleSettings:PropTypes.func,
  }
