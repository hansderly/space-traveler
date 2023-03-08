/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4';

const fetchRocket = createAsyncThunk('rocket/getRocket', async () => {
  const endpoint = '/rockets';
  const url = baseURL + endpoint;

  try {
    const { data } = await axios.get(url);

    const rockets = data.map(({
      id, name, description: desc, flickr_images: img,
    }) => ({
      id, name, desc, img, reserved: false,
    }));

    return { rockets };
  } catch (error) {
    return error;
  }
});

const initialState = {
  rocket: [],
  loading: false,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve(state, { payload }) {
      const { id } = payload;
      state.rocket = state.rocket.map((r) => ((r.id === id) ? { ...r, reserved: !r.reserved } : r));
    },
  },
  extraReducers: {
    [fetchRocket.pending]: (state) => {
      state.loading = true;
    },
    [fetchRocket.fulfilled]: (state, action) => {
      state.rocket = action.payload.rockets;
    },
    [fetchRocket.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export { fetchRocket };
export const { reserve } = rocketSlice.actions;

export default rocketSlice.reducer;
