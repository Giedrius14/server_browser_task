import React from 'react';
import styles from './TableRow.module.scss';

interface TableRowInterface {
  name: string;
  distance: number;
}

const TableRow = ({ name, distance }: TableRowInterface) => (
  <tr key={name} className={styles.TableRow}>
    <td className="p-2">{name}</td>
    <td className="p-2">{distance}</td>
  </tr>
);

export default TableRow;
