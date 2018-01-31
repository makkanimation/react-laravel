import React from 'react';
import PropTypes from 'prop-types';

export default class FileInput extends React.Component {
  constructor(props) {
	super(props);
  }

  render() {
    return (
        <input type="file" className="form-control" id={this.props.idName} />
    );
  }
}

FileInput.defaultProps = {
  inputType:'file',
  idName: ''
};

FileInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  idName: PropTypes.string,
}