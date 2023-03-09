import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissionData } from '../../store/mission/missionSlice';
import styles from './Mission.module.css';

function Mission() {
  const missions = useSelector((state) => state.mission.mission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionData());
  }, []);

  const handleMissionJoin = (mission) => {
    if (mission.joined) {
      dispatch(leaveMission(mission.id));
    } else {
      dispatch(joinMission(mission.id));
    }
  };

  return (
    <table className={styles.theTable}>
      <thead className={styles.heading}>
        <tr>
          <th className={styles.eachMiss}>Mission</th>
          <th className={styles.eachDesc}>Description</th>
          <th className={styles.eachStat}>Status</th>
          <th className={styles.eachAct}>Action</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default Mission;
