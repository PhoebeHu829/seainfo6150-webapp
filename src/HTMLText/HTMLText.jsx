import React from 'react';
import PropTypes from 'prop-types';
import './HTMLText.css';

const HTMLText = (props) => {
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: props.text }} />
  );
};

HTMLText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default HTMLText;
