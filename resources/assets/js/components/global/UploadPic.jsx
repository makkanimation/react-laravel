import React from 'react';
import Image from './Image';
import FileInput from './FileInput';

import PropTypes from 'prop-types';

export default class UploadPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        [
          <div className="col-md-3">
            <div className="text-center">
            <Image srcUrl={this.props.srcUrl} clsName="avatar img-circle" altName="avatar" />
            <h6>{this.props.uploadText}</h6>
            <FileInput/>
            </div>
          </div>
        ]
        
    );
  }
}

UploadPic.defaultProps = {
  srcUrl: '/src/images/100.png',
  uploadText:'Upload a different photo...',
  idName: ''
};

UploadPic.propTypes = {
  srcUrl : PropTypes.string.isRequired,
  uploadText: PropTypes.string.isRequired,
  idName: PropTypes.string,
}