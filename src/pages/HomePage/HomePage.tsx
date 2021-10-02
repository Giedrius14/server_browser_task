import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import TableComponent from '../../components/TableComponent/TableComponent';
import api from '../../api';
import { useSortServers } from '../../components/TableComponent/hooks/Sort.hook';
import { Server } from '../../interfaces/Server';

const HomePage = () => {
  const [servers, setServers] = useState([] as Server[]);
  const [isLoaded, setLoaded] = useState(false);
  const { sortConfig, handleSortAction } = useSortServers(servers, setServers);
  const [searchQuery, setSearchQuery] = React.useState('' as any);

  function loadServers() {
    api.getServers().then((list: Server[]) => {
      setLoaded(true);
      setServers(list);
    });
  }

  useEffect(() => {
    if (!isLoaded) {
      loadServers();
    }
  }, [isLoaded, loadServers]);

  const handleSearch = (event: any) => {
    const filter = event.target.value;
    setSearchQuery((isNaN(filter) && filter.trim().toLowerCase()) || filter);
  };

  const filterData = (servers: Server[]) => {
    return !searchQuery
      ? servers
      : servers.filter(({ name, distance }) =>
          isNaN(searchQuery)
            ? name.toLowerCase().includes(searchQuery)
            : distance === searchQuery
        );
  };

  return (
    <div className={styles.HomePage} data-testid="HomePage">
      HomePage
      {isLoaded ? (
        <TableComponent
          servers={filterData(servers)}
          sortConfig={sortConfig}
          handleSortAction={handleSortAction}
          handleSearch={handleSearch}
        ></TableComponent>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default HomePage;
