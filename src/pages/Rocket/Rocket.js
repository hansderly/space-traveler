import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RocketCard } from '../../components';
import { fetchRocket } from '../../store/rocket/rocketSlice';
import styles from './Rocket.module.css';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  return (
    <div className={styles.container}>
      <>
        <RocketCard />
      </>
    </div>
  );
};

export default Rocket;
