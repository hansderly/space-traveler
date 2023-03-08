import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RocketCardList } from '../../components';
import { fetchRocket } from '../../store/rocket/rocketSlice';
import styles from './Rocket.module.css';

const Rocket = () => {
  const dispatch = useDispatch();
  const { rocket } = useSelector((store) => store.rocket);

  useEffect(() => {
    dispatch(fetchRocket());
  }, []);

  return (
    <div className={styles.container}>
      <RocketCardList rockets={rocket} />
    </div>
  );
};

export default Rocket;
