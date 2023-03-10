import { configureStore } from '@reduxjs/toolkit';
import rocketReducer, { fetchRocket } from '../store/rocket/rocketSlice';

describe('Store', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        rocket: rocketReducer,
      },
    });
  });

  it('should have the initial state', () => {
    const initialState = {
      rocket: [],
    };
    const { rocket } = store.getState().rocket;

    expect(rocket).toEqual(initialState.rocket);
  });

  it('should have length of 4', async () => {
    await store.dispatch(fetchRocket());
    const { rocket } = store.getState().rocket;

    expect(rocket).toHaveLength(4);
  });
});
