import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from '../styles/Item.module.css';

const Item = ({ id, username, title, image, description, category }) => {
  return (
    <main className={styles.container}>
      <div className={styles.item} key={id}>
        <img src={`http://localhost:5000/uploads/${image}`} />
        <div className={styles.username}>
          <FaUserCircle className={styles.icon} />
          {username}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.category}>{category}</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>e</button>
        <button className={styles.button}>d</button>
      </div>
    </main>
  );
};

export default Item;
