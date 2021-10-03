import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Server } from '../../interfaces/Server';
import api from '../../api';
import { RootState } from '../../store/store';
import { Sort } from '../../interfaces/ServerList';
import { ASCENDING } from '../../constants';

export interface ServerListState {
  servers: Server[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: ServerListState = {
  servers: [],
  status: 'idle',
  error: '',
};

export const fetchServers = createAsyncThunk('servers/fetch', async () =>
  api.getServers()
);

const serverListSlice = createSlice({
  name: 'serverPage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchServers.pending, (state: ServerListState) => {
        state.status = 'loading';
      })
      .addCase(fetchServers.fulfilled, (state: ServerListState, action) => {
        state.status = 'succeeded';
        state.servers = state.servers.concat(action.payload);
      })
      .addCase(fetchServers.rejected, (state: ServerListState, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = serverListSlice.actions;

const getAllServers = (state: RootState) => state.serverPage.servers;
export const selectAllServers = (sort: Sort) => (state: RootState) =>
  sortServers(getAllServers(state), sort);

export const filterServers = (searchQuery: any, sort: Sort) => (
  state: RootState
) =>
  sortServers(
    getAllServers(state).filter(({ name, distance }: Server) =>
      isNaN(searchQuery)
        ? name.toLowerCase().includes(searchQuery)
        : distance === searchQuery
    ),
    sort
  );

const sortServers = (servers: Server[], sort: Sort) => {
  return servers.slice().sort((a: any, b: any) => {
    if (a[sort.fieldName] < b[sort.fieldName]) {
      return sort.order === ASCENDING ? -1 : 1;
    }

    if (a[sort.fieldName] > b[sort.fieldName]) {
      return sort.order === ASCENDING ? 1 : -1;
    }

    return 0;
  });
};

export default serverListSlice.reducer;
