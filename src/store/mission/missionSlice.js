import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissionData = createAsyncThunk(
  'mission/fetchMissionData',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const { data } = response;
    return data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      joined: false,
      link: mission.website,
    }));
  },
);

const initialState = {
  mission: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        mission: state.mission.map((mission) => {
          if (mission.id === payload) {
            return {
              ...mission,
              joined: true,
            };
          }
          return mission;
        }),
      };
    },
    leaveMission: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        mission: state.mission.map((mission) => {
          if (mission.id === payload) {
            return {
              ...mission,
              joined: false,
            };
          }
          return mission;
        }),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.fulfilled, (state, action) => ({
      ...state,
      mission: action.payload,
    }));
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
