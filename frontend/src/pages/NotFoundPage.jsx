import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapSigns } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import styles from '../styles/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <FaMapSigns className={styles.iconDirection} />
      <p>This page does not exist</p>
      <p>Let me take you back home</p>
      <Link className={styles.iconHome} to="/">
        <AiFillHome />
      </Link>
    </main>
  );
};

export default NotFoundPage;
