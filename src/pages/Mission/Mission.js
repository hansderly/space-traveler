import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissionData } from '../../store/mission/missionSlice';
import styles from './Mission.module.css';

function Mission() {
  const missions = useSelector((state) => state.mission.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionData());
  }, [dispatch]);

  const handleMissionJoin = (mission) => {
    if (mission.joined) {
      dispatch(leaveMission(mission.id));
    } else {
      dispatch(joinMission(mission.id));
    }
  };

  return (
    <>
      {missions.map((miss) => (
        <tr className={styles.table} key={miss.id}>
          <td className={styles.name}>{miss.name}</td>
          <td className={styles.desc}>{miss.description}</td>
          <td>
            <div className={miss.joined ? `${styles.memberBadge} ${styles.activeMission}` : styles.memberBadge}>
              {miss.joined ? 'Active Member' : 'NOT A MEMBER'}
            </div>
          </td>
          <td>
            <button
              className={miss.joined ? styles.leaveBtn : styles.joinBtn}
              type="button"
              onClick={() => handleMissionJoin(miss)}
            >
              {miss.joined ? 'Leave Mission' : 'Join Mission'}
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Mission;
