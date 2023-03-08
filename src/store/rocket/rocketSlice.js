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
      id, name, description, flickr_images: img,
    }) => ({
      id, name, description, img,
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

export default rocketSlice.reducer;
