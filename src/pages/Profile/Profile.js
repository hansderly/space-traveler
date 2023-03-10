import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const MyProfile = () => {
  const { rocket } = useSelector((store) => store.rocket);
  const { mission } = useSelector((store) => store.mission);

  const reserveRocket = rocket.filter((r) => r.reserved);
  const joinedMissions = mission.filter((m) => m.joined);

  return (
    <div className={styles.profileContainer}>
      <section className={styles.myMissions}>
        <span className={styles.sectionTitle}>My Missions</span>
        {joinedMissions.length > 0 ? (
          <ul className={styles.myMissionsList}>
            {joinedMissions.map((miss) => {
              if (miss?.joined) {
                return (
                  <li className={styles.item} key={miss.id}>
                    {miss.name}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span className={styles.no}>NO MISSIONS JOINED</span>
        )}
      </section>
      <section className={styles.myRockets}>
        <span className={styles.sectionTitle}>My Rockets</span>
        {reserveRocket.length > 0 ? (
          <ul className={styles.myMissionsList}>
            {reserveRocket.map((rocket) => {
              if (rocket?.reserved) {
                return (
                  <li className={styles.item} key={rocket.id}>
                    {rocket.name}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span className={styles.no}>NO ROCKETS RESERVED</span>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
