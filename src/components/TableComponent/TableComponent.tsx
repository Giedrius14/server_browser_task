import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import styles from './TableComponent.module.scss';
import { FaSearch } from 'react-icons/all';

const TableComponent = ({
  servers,
  handleSearch,
  handleSortAction,
  sortConfig,
}: any) => (
  <div className={styles.TableComponent}>
    <div className={styles.search}>
      <label htmlFor="search">
        <FaSearch className={styles.searchIcon}></FaSearch>
        <input id="search" type="text" onChange={handleSearch} />
      </label>
    </div>
    <table className={styles.table}>
      <TableHeader
        handleSortAction={handleSortAction}
        sortConfig={sortConfig}
      />
      <TableBody servers={servers} />
    </table>
  </div>
);

const TableBody = ({ servers }: any) => (
  <tbody>
    {servers.map(({ name, distance }: any, index: number) => (
      <tr key={`${name}${index}`}>
        <td className="p-2">{name}</td>
        <td className="p-2">{distance}</td>
      </tr>
    ))}
  </tbody>
);

export default TableComponent;
