import React from 'react';
import { GiForkKnifeSpoon } from 'react-icons/gi';

import styles from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.logo}>Crumbs</div>
        <div className={styles.icon}>
          <GiForkKnifeSpoon />
        </div>
      </div>
    </main>
  );
};

export default Logo;
