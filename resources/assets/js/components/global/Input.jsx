import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor(props) {
    
	super(props);
    this.state = {
      value: this.props.value || '',
      clsName:this.props.clsName,
      codeDisplayStyle:this.props.codeDisplayStyle,
      typedError:this.props.typedError,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  validateInput(e){
    this.setState({clsName: this.props.clsName});
    this.setState({typedError:""});
    this.setState({codeDisplayStyle:this.props.codeDisplayStyle});
    let emailValid, passwordValid;
    let error=0;
    if(e.target.required){
        switch(e.target.type){
          case 'text':
            if(e.target.value==''){
              this.setState({typedError: this.props.label+" cannot be empty"});
              error=1;
            }
          case 'email':
            emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);  
            if(!emailValid){
              this.setState({typedError: this.props.label+" not Valid"});
              error=1;
            }
            case 'password':
            passwordValid = e.target.value.length>6;  
            if(!passwordValid){
              this.setState({typedError: this.props.label+" is too short"});
              error=1;
            }
        }
    }

    if(error==1){
      this.setState({clsName: this.props.clsName+" error"});
      this.setState({codeDisplayStyle: " block"});
    }
  }
  handleChange(e) {
    let value = e.target.value.trim()
    this.setState({value: value});
    this.validateInput(e);
    
  }
  handleBlur(e){
    this.validateInput(e);
  }
  render() {
    return (
        this.props.addLabel && <label><b>{this.props.label}</b></label>,
          <div><input 
          type={this.props.inputType}
          className={this.state.clsName}
          name={this.props.name}
          value={this.state.value}
          required={this.props.RequiredField}
          placeholder={this.props.placeHolder}
          onBlur= {this.handleBlur}
          onChange={this.handleChange}
          id={this.props.idName}
          autoComplete={this.props.autoComplete}
        /><code style={{'display':this.state.codeDisplayStyle}}>{this.state.typedError}</code></div>
    );
  }
}

Input.defaultProps = {
  addLabel: true,
  inputType: 'text',
  clsName: 'input',
  value:'',
  RequiredField:false,
  placeHolder:'',
  codeDisplayStyle:'none',
  typedError:'',
};

Input.propTypes = {
  addLabel: PropTypes.bool,
  label: PropTypes.string,
  inputType: PropTypes.string,
  clsName: PropTypes.string,
  name : PropTypes.string.isRequired,
  value: PropTypes.string,
  RequiredField: PropTypes.bool,
  placeHolder: PropTypes.string,
  onBlurCB: PropTypes.func,
  idName: PropTypes.string,
  autoComplete:PropTypes.bool,
  typedError:PropTypes.string
}