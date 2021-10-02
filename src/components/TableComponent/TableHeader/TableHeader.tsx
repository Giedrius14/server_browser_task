import React from 'react';
import styles from './TableHeader.module.scss';
import { DISTANCE, NAME } from '../../../constants';
import HeaderCell from '../HeaderCell/HeaderCell';

const TableHeader = ({ handleSortAction, sortConfig }: any) => {
  return (
    <thead className={styles.TableHeader}>
      <tr>
        <HeaderCell
          key={NAME}
          name="Servers"
          handleSortAction={() => handleSortAction([NAME])}
          sortDirection={sortConfig[NAME]}
        />
        <HeaderCell
          key={DISTANCE}
          name="Distance"
          handleSortAction={() => handleSortAction([DISTANCE])}
          sortDirection={sortConfig[DISTANCE]}
        />
      </tr>
    </thead>
  );
};

export default TableHeader;
