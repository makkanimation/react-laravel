import React from 'react';
import { Link } from 'react-router-dom';
export default class NavComponent extends React.Component{
    render(){
        return(
            <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                    <Link to='/dashboard' className="nav-link">Overview <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/users' className="nav-link">Users</Link>
                    </li>
                </ul>
            </nav>
        );
    }
} 