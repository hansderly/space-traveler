import React from 'react';

import styles from './RocketCard.module.css';
import ButtonRocket from '../ButonRocket/ButtonRocket';

const RocketCard = () => (
  <div className={styles.container}>
    <img src="/assets/rocket.jpg" alt="ex" />
    <div className={styles.infos}>
      <h2>Name</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veritatis porro labore natus magnam ullam,
        eveniet ut, at libero vitae sunt aliquid nulla iure, sint soluta voluptatem.
        Doloremque sint quibusdam vero!
      </p>
      <ButtonRocket>Reserve Rocket</ButtonRocket>
    </div>
  </div>
);

export default RocketCard;
