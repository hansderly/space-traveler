import React from 'react';
import PropTypes from 'prop-types';

import RocketCard from '../RocketCard/RocketCard';

const RocketCardList = ({ rockets }) => (
  rockets.map((rocket) => <RocketCard key="r" />)
);

RocketCardList.propTypes = {
  rockets: PropTypes.arrayOf.isRequired,
};

export default RocketCardList;
