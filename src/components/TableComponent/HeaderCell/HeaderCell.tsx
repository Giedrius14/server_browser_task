import React from 'react';
import styles from './HeaderCell.module.scss';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/all';
import { ASCENDING } from '../../../constants';

const HeaderCell = ({ name, handleSortAction, sortDirection }: any) => {
  const commonIconProps = {
    className: '',
  };

  const resolveCurrentIcon = (direction: string) => {
    if (!direction) {
      return <FaSort {...commonIconProps} />;
    }

    if (direction === ASCENDING) {
      return <FaSortUp {...commonIconProps} />;
    }

    return <FaSortDown {...commonIconProps} />;
  };

  return (
    <th className={styles.HeaderCell} onClick={handleSortAction}>
      <span>{name}</span>
      {resolveCurrentIcon(sortDirection)}
    </th>
  );
};

export default HeaderCell;
