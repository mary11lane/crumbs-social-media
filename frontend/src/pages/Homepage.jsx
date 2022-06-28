import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Homepage.module.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const homepage = () => {
  return (
    <main className={styles.container}>
      <Logo />
      <Link className={styles.button} to="/create">
        Create
      </Link>

      <Link className={styles.button} to="/feed">
        View
      </Link>
      <Footer />
    </main>
  );
};
export default homepage;
