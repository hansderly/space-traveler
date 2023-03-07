import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mission: [],
};

const missionSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
  },
});

export default missionSlice.reducer;
