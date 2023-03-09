import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from '../store/store';
import { fetchRocket } from '../store/rocket/rocketSlice';

describe('store', () => {
  let mock;
  
  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('get lsi of rocket', async () => {

    const data = [{ id: 1, desc: 't' }, { id: 2, desc: 'y' }];
    mock.onGet();
    // mock.onGet('/rockets').reply(200, data);

    // await store.dispatch(fetchRocket());
    // const { rocket } = store.getState().rocket;
    // expect(rocket).toHaveLength(2);
  });
});
