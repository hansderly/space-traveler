import React from 'react';
import PropTypes from 'prop-types';

import styles from './RocketCard.module.css';
import ButtonRocket from '../ButonRocket/ButtonRocket';
import Reserve from '../Reserve/Reserve';

const RocketCard = ({
  name, desc, img, reserved, onClick,
}) => (
  <div className={styles.container}>
    <img src={img} alt="ex" />
    <div className={styles.infos}>
      <h2>{name}</h2>
      <p>
        {reserved && <Reserve />}
        {' '}
        {desc}
      </p>
      <ButtonRocket varient={reserved} onClick={onClick}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</ButtonRocket>
    </div>
  </div>
);

RocketCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RocketCard;
