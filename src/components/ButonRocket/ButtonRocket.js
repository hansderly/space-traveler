import React from 'react';
import PropTypes from 'prop-types';

const ButtonRocket = ({ children }) => <button type="button">{children}</button>;

ButtonRocket.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonRocket;
