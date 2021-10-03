import React from 'react';
import styles from './TableHeader.module.scss';
import { DISTANCE, NAME } from '../../../constants';
import HeaderCell from '../HeaderCell/HeaderCell';

const TableHeader = ({ handleSortAction, sortConfig }: any) => (
  <thead className={styles.TableHeader}>
    <tr>
      <HeaderCell
        key={NAME}
        name="Servers"
        handleSortAction={() => handleSortAction(NAME)}
        sortDirection={sortConfig.fieldName === NAME ? sortConfig.order : null}
      />
      <HeaderCell
        key={DISTANCE}
        name="Distance"
        handleSortAction={() => handleSortAction(DISTANCE)}
        sortDirection={
          sortConfig.fieldName === DISTANCE ? sortConfig.order : null
        }
      />
    </tr>
  </thead>
);

export default TableHeader;
