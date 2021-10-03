import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import styles from './TableComponent.module.scss';
import { FaSearch } from 'react-icons/all';
import { Server } from '../../interfaces/Server';

interface TableProps {
  servers: Server[];
  handleSortAction: (fieldName: string) => void;
  handleSearch: (event: any) => void;
  sortConfig: {};
}

const TableComponent = ({
  servers,
  handleSearch,
  handleSortAction,
  sortConfig,
}: TableProps) => (
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
      <TableBody servers={servers} />
    </table>
  </div>
);

const TableBody = ({ servers }: { servers: Server[] }) => (
  <tbody>
    {servers?.map(({ name, distance }: Server, index: number) => (
      <tr key={`${name}${index}`}>
        <td className="p-2">{name}</td>
        <td className="p-2">{distance}</td>
      </tr>
    ))}
  </tbody>
);

export default TableComponent;
