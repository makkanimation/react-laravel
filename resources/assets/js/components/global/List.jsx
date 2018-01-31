import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  constructor(props) {
    
	super(props);
   // this.handleClick = this.handleClick.bind(this);
  }
  
  //handleClick(e){
   // console.log('paging');
   // console.log(e.target.text);
  //  this.props.handleClickSubmit(e.target.text);
 // }

  render() {
    return (
        <li onClick={this.props.handleClick}>
        {this.props.anchTag && <a href={this.props.anchUrl} >{this.props.value}</a>}
        {!this.props.anchTag && this.props.value}
        </li>
    );
  }
}

List.defaultProps = {
    anchTag:false,
};

List.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick:PropTypes.func,
  anchTag:PropTypes.bool.isRequired,
  anchUrl:PropTypes.string,
}