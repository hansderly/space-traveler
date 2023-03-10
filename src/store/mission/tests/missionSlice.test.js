import { configureStore } from '@reduxjs/toolkit';
import missionReducer, { fetchMissionData, joinMission, leaveMission } from '../missionSlice';

describe('missionSlice', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        mission: missionReducer,
      },
    });
  });

  it('should fetch mission data successfully', async () => {
    await store.dispatch(fetchMissionData());
    const missions = store.getState().mission.mission;
    expect(missions.length).toBeGreaterThan(0);
  });

  it('should join a mission successfully', () => {
    const missionId = 1; // Replace with a valid mission ID
    store.dispatch(joinMission(missionId));
    const joinedMission = store.getState()
      .mission.mission.find((mission) => mission.id === missionId);
    expect(joinedMission.joined).toBe(true);
  });

  it('should leave a mission successfully', () => {
    const missionId = 1; // Replace with a valid mission ID
    store.dispatch(leaveMission(missionId));
    const leftMission = store.getState()
      .mission.mission.find((mission) => mission.id === missionId);
    expect(leftMission.joined).toBe(false);
  });
});
