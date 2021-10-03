import { configureStore } from '@reduxjs/toolkit';
import serverListSlice from '../pages/ServerList/serverListSlice';

export const store = configureStore({
  reducer: {
    serverPage: serverListSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
