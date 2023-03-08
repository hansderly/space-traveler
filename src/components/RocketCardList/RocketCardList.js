import React from 'react';
import PropTypes from 'prop-types';

import RocketCard from '../RocketCard/RocketCard';

const RocketCardList = ({ rockets }) => (
  <>
    {
      rockets.map(({
        id, name, desc, img,
      }) => (
        <RocketCard
          key={id}
          name={name}
          desc={desc}
          img={img}
        />
      ))
    }
  </>
);

RocketCardList.propTypes = {
  rockets: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RocketCardList;
