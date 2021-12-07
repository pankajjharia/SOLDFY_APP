import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    Header Component
  </div>
);

export default Header;
