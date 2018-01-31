import React from 'react';
import NavComponent from './includes/NavComponent';
import UserListComponent from './sub-components/UserListComponent';
import PropTypes from 'prop-types';
import List from './global/List'
export default class UsersComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }  
  
  handleClick(e){
    console.log('test');
    console.log(e);
  }

  render(){
    
    var lis = [];
    var num = 0;
      for (var i=0; i<this.props.totalPage; i++) {
        num = i + 1;
        //lis.push(<li><a href="#" onClick={this.props.getPage(num)} >{num}</a></li>);
        lis.push(<List handleClick={this.props.getPage} anchTag={true} value={num} />);
      }
    
      
    return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h2>List Users</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Avtar</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Settings</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userRecords.length==0 && <tr><td colSpan='5'>No user Found.</td></tr>}
                
                {this.props.userRecords.length>0 && this.props.userRecords.map((list,index)=>
                  <UserListComponent userRecords={list} toggleSettings={this.props.toggleSettings} settingStyle={this.props.settingStyle} />
                )}
                
                
              </tbody>
            </table>
            { this.props.totalPage>0 &&  
            <div className="center-align">
              <ul className="pagination">
                {lis}
              </ul>
            </div>
            }
          </div>
        </main>
            </div>
            </div>
        );
    }
} 

UsersComponent.defaultProps = {
  userRecords: [],
  totalPage:0
};

UsersComponent.propTypes = {
  userRecords: PropTypes.array.isRequired,
  totalPage: PropTypes.number.isRequired,
  getPage:PropTypes.func,
  toggleSettings:PropTypes.func,
  settingStyle: PropTypes.string,
}