import React from 'react';
import PropTypes from 'prop-types';

const ButtonRocket = ({ children, onClick }) => <button onClick={onClick} type="button">{children}</button>;

ButtonRocket.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonRocket;
