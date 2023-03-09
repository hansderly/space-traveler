import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const MyProfile = () => {
  const { rocket } = useSelector((store) => store.rocket);
  const reserveRocket = rocket.filter((r) => r.reserved);

  return (
    <div className={styles.profileContainer}>
      <section className={styles.myMissions}>
        <span className={styles.sectionTitle}>My Missions</span>
        {[].length > 0 ? (
          <ul className={styles.myMissionsList}>
            {[].map((mission) => {
              if (mission?.joined) {
                return (
                  <li className={styles.item} key={mission.id}>
                    {mission.missionName}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        ) : (
          <span>NO MISSIONS JOINED</span>
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
          <span>NO Rockets Reserved</span>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
