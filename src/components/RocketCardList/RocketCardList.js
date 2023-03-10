import React from 'react';
import PropTypes from 'prop-types';

import RocketCard from '../RocketCard/RocketCard';

const RocketCardList = ({ rockets, onClick }) => {
  const handleClick = (id) => onClick(id);

  return (
    <>
      {
      rockets.map(({
        id, name, desc, img, reserved,
      }) => (
        <RocketCard
          key={id}
          name={name}
          desc={desc}
          img={img}
          reserved={reserved}
          onClick={() => handleClick(id)}
        />
      ))
    }
    </>
  );
};

RocketCardList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RocketCardList;
