/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RocketCardList } from '../../components';
import { fetchRocket, reserve } from '../../store/rocket/rocketSlice';
import styles from './Rocket.module.css';

const Rocket = () => {
  const dispatch = useDispatch();
  const { rocket } = useSelector((store) => store.rocket);

  useEffect(() => {
    if (!rocket.length) dispatch(fetchRocket());
  }, []);

  const handleClick = (id) => {
    dispatch(reserve({ id }));
  };

  return (
    <div className={styles.container}>
      <RocketCardList rockets={rocket} onClick={handleClick} />
    </div>
  );
};

export default Rocket;
