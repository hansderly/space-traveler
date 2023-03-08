/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';

const ButtonRocket = ({ varient, children, onClick }) => {
  const style = {
    reserve: {
      backgroundColor: '#007BFF',
      color: 'white',
      padding: '10px 20px',
      border: '0',
      borderRadius: '5px',
    },
    unreserve: {
      color: 'gray',
      padding: '10px 20px',
      border: '1px solid gray',
      borderRadius: '5px',
    },
  };

  varient = varient === 'reserve' ? style.reserve : style.unreserve;

  return (
    <button style={varient} onClick={onClick} type="button">{children}</button>
  );
};

ButtonRocket.propTypes = {
  onClick: PropTypes.func.isRequired,
  varient: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonRocket;
