import { ASCENDING, DESCENDING, initialSortConfig } from '../../../constants';
import { useState } from 'react';

export const useSortServers = (
  servers: any,
  setServers: any,
  initialConfig: any = initialSortConfig
) => {
  const [sortConfig, setSortConfig] = useState(initialConfig);

  const handleSortAction = (fieldName: any) => {
    const oldSortDirection = sortConfig[fieldName];
    const newSortDirection = [ASCENDING, null].includes(oldSortDirection)
      ? DESCENDING
      : ASCENDING;
    const newSortConfig = {
      ...initialSortConfig,
      [fieldName]: newSortDirection,
    };
    const sortedServers = sortServers(newSortConfig, fieldName, servers);

    setServers(sortedServers);
    setSortConfig(newSortConfig);
  };

  return {
    sortConfig,
    handleSortAction,
  };
};

const sortServers = (sortConfig: any, fieldName: any, servers: any) =>
  servers.sort((a: any, b: any) => {
    if (a[fieldName] < b[fieldName]) {
      return sortConfig[fieldName] === ASCENDING ? -1 : 1;
    }

    if (a[fieldName] > b[fieldName]) {
      return sortConfig[fieldName] === ASCENDING ? 1 : -1;
    }

    return 0;
  });
