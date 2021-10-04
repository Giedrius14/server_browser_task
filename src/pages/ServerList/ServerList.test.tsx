import React from 'react';
import ServerList from './ServerList';
import { mount } from 'enzyme';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import serverListSlice, { ServerListState } from './serverListSlice';

describe('<ServerList />', () => {
  let wrapper: any;
  const mockStore = configureStore({
    reducer: serverListSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState: {
      serverPage: {
        servers: [],
        status: 'idle',
        error: '',
      } as ServerListState,
    } as any,
  });
  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <ServerList />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('it should mount', () => {
    expect(wrapper).toHaveLength(1);
  });
});
