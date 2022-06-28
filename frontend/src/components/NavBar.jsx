import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FiList } from 'react-icons/fi';
import { AiFillFileAdd } from 'react-icons/ai';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <main className={styles.navBar}>
      <div className={styles.navBarLogo}>Crumbs</div>
      <div className={styles.navBarLinks}>
        <Link className={styles.link} to="/">
          <AiFillHome />
        </Link>
        <Link className={styles.link} to="/feed">
          <FiList />
        </Link>
        <Link className={styles.link} to="/create">
          <AiFillFileAdd />
        </Link>
      </div>
    </main>
  );
};

export default NavBar;
