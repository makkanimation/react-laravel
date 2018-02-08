import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer';
import LogoutContainer from './containers/LogoutContainer';
import RegisterContainer from './components/RegisterComponent';
import DashboardComponent from './components/DashboardComponent';
import ProfileContainer from './containers/ProfileContainer';
import UserContainer from './containers/UserContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';
import { loggedIn } from './helpers/authorization'
export default class WebRouter extends React.Component {
    requireAuth(Page,props) {
        if(loggedIn()){
            return (<Page {...props} />)
        }else{
            return <Redirect to="/login"/>;
        }
    }
    
    requireNotAuth(Page,props) {
        if(!loggedIn()){
           return (<Page {...props} />)
        }else{
           return <Redirect to="/dashboard"/>;
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => (this.requireAuth(DashboardComponent,props))} />
                <Route exact path='/login' render={(props) => (this.requireNotAuth(LoginContainer,props))} />
                <Route exact path='/logout' render={(props) => (this.requireAuth(LogoutContainer,props))} />
                <Route exact path='/register' render={(props) => (this.requireNotAuth(RegisterContainer,props))} />
                <Route exact path='/dashboard' render={(props) => (this.requireAuth(DashboardComponent,props))} />
                <Route path='/profile/:id' render={(props) => (this.requireAuth(ProfileContainer,props))} />
                <Route exact path='/users' render={(props) => (this.requireAuth(UserContainer,props))} />
                <Route exact path='/user/create' render={(props) => (this.requireAuth(CreateUserContainer,props))} />
                <Route path='/user/edit/:id' render={(props) => (this.requireAuth(EditUserContainer,props))} />
            </Switch>
        );
    }
}