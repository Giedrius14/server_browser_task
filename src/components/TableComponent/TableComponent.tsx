import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import styles from './TableComponent.module.scss';
import { FaSearch } from 'react-icons/fa';
import { Server } from '../../interfaces/Server';
import { Sort } from '../../interfaces/ServerList';
import TableRow from './TableRow/TableRow';

interface TableInterface {
  servers: Server[];
  handleSortAction: (fieldName: string) => void;
  handleSearch: (event: any) => void;
  sortConfig: Sort;
}

const TableComponent = ({
  servers,
  handleSearch,
  handleSortAction,
  sortConfig,
}: TableInterface) => (
  <div className={styles.TableComponent}>
    <div className={styles.search}>
      <>
        <FaSearch className={styles.searchIcon}></FaSearch>
        <input id="search" type="text" onChange={handleSearch} />
      </>
    </div>
    <table className={styles.table}>
      <TableHeader
        handleSortAction={handleSortAction}
        sortConfig={sortConfig}
      />
      <tbody>
        {servers?.map(({ name, distance }: Server, index: number) => (
          <TableRow
            key={`${index}-${name}`}
            name={name}
            distance={distance}
          ></TableRow>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableComponent;
