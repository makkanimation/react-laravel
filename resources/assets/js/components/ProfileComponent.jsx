import React from 'react';
import NavComponent from './includes/NavComponent';
import Image from './global/Image'
import PropTypes from 'prop-types';
export default class ProfileComponent extends React.Component{
    render(){
        console.log('Mann1');
        if(this.props.userRecords.length==0){
            return null;
        }
        console.log('Mann2');
        return(
            <div className="container-fluid">
            <div className="row">
                <NavComponent/>
                <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
                <h2 style={{textAlign:'center'}}>User Profile Card</h2>
                    <div className="card">
                    <Image srcUrl={this.props.userRecords.avatar} altName={this.props.userRecords.first_name+' '+this.props.userRecords.last_name} styleName={{width:'100%'}} />
                    <h1>{this.props.userRecords.first_name} {this.props.userRecords.last_name}</h1>
                    <p className="title">CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div style={{margin:'24px 0'}}>
                        <a href="#"><i className="fa fa-dribbble"></i></a> 
                        <a href="#"><i className="fa fa-twitter"></i></a>  
                        <a href="#"><i className="fa fa-linkedin"></i></a>  
                        <a href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button>Contact</button></p>
                    </div>
                </main>
            </div>
            </div>
        );
    }
} 

ProfileComponent.defaultProps = {
    userRecords: []
  };
  
  ProfileComponent.propTypes = {
    userRecords: PropTypes.array.isRequired,
  }
