import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocket: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
  },
});

export default rocketSlice.reducer;
