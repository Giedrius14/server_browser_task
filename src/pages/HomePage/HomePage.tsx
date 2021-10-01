import React from 'react';
import styles from './HomePage.module.scss';
import TableComponent from '../../components/TableComponent/TableComponent';

const HomePage = () => {
  return (
    <div className={styles.HomePage} data-testid="HomePage">
      HomePage
      <TableComponent></TableComponent>
    </div>
  );
};

export default HomePage;
