import React from 'react';
import NavComponent from './includes/NavComponent';
import HeaderContainer from '../containers/HeaderContainer';
export default class DashboardComponent extends React.Component{
    render(){
        return(
            <div><HeaderContainer/>
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>

                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                <h1>Dashboard</h1>

                <section className="row text-center placeholders">
                    <div className="col-6 col-sm-3 placeholder">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                    <h4>Label</h4>
                    <div className="text-muted">Something else</div>
                    </div>
                    <div className="col-6 col-sm-3 placeholder">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                    <h4>Label</h4>
                    <span className="text-muted">Something else</span>
                    </div>
                    <div className="col-6 col-sm-3 placeholder">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                    <h4>Label</h4>
                    <span className="text-muted">Something else</span>
                    </div>
                    <div className="col-6 col-sm-3 placeholder">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                    <h4>Label</h4>
                    <span className="text-muted">Something else</span>
                    </div>
                </section>
                </main>
            </div>
            </div>
            </div>
        );
    }
}