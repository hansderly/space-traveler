import React from 'react';
import PropTypes from 'prop-types';

import styles from './RocketCard.module.css';
import ButtonRocket from '../ButonRocket/ButtonRocket';

const RocketCard = ({
  name, desc, img, onClick,
}) => (
  <div className={styles.container}>
    <img src={img} alt="ex" />
    <div className={styles.infos}>
      <h2>{name}</h2>
      <p>
        {desc}
      </p>
      <ButtonRocket onClick={onClick}>Reserve Rocket</ButtonRocket>
    </div>
  </div>
);

RocketCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RocketCard;
