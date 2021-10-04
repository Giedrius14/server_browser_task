import React, { useEffect } from 'react';
import styles from './ServerList.module.scss';
import TableComponent from '../../components/TableComponent/TableComponent';
import {
  fetchServers,
  filterServers,
  selectAllServers,
} from './serverListSlice';
import { RootState } from '../../store/store';
import { ASCENDING, DESCENDING } from '../../constants';
import { Sort } from '../../interfaces/ServerList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ServerList = () => {
  const [searchQuery, setSearchQuery] = React.useState('' as any);
  const [sort, setSort] = React.useState({
    fieldName: 'servers',
    order: DESCENDING,
  } as Sort);

  const dispatch = useAppDispatch();
  const servers = searchQuery
    ? useAppSelector(filterServers(sort, searchQuery))
    : useAppSelector(selectAllServers(sort));

  const serversStatus = useAppSelector(
    (state: RootState) => state.serverPage.status
  );

  useEffect(() => {
    dispatch(fetchServers());
  }, [dispatch]);

  const handleSearch = (event: any) => {
    const filter = event.target.value?.trim();
    if (!filter) {
      return;
    }

    setSearchQuery(filter.toLowerCase() || filter);
  };

  const handleSortAction = (fieldName: string) => {
    setSort({
      fieldName: fieldName.toLowerCase(),
      order: sort.order === DESCENDING ? ASCENDING : DESCENDING,
    });
  };

  return (
    <div className={styles.ServerList} data-testid="ServerList">
      <h2>Server list</h2>
      {serversStatus === 'succeeded' ? (
        <TableComponent
          servers={servers}
          sortConfig={sort}
          handleSortAction={handleSortAction}
          handleSearch={handleSearch}
        ></TableComponent>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ServerList;
