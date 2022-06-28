import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { FaCookieBite } from 'react-icons/fa';

import styles from '../styles/ViewPage.module.css';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const viewPage = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const { data } = await axios.get('http://localhost:5000/items');
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter((item) => item._id !== id));
    notify();
  };

  const notify = () =>
    toast('Crumbs deleted!', {
      position: 'bottom-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  return (
    <main>
      <NavBar />
      {items.length === 0 ? (
        <p className={styles.p}>
          Your feed is currently empty. Add some crumbs now... <FaCookieBite />
        </p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item._id} id={item._id} className={styles.container}>
              <div className={styles.item}>
                <img src={`http://localhost:5000/uploads/${item.image}`} />
                <div className={styles.username}>
                  <FaUserCircle className={styles.icon} />
                  {item.username}
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.category}>{item.category}</div>
              </div>
              <div className={styles.buttons}>
                <Link to={`/edit/${item._id}`}>
                  <button className={styles.button}>
                    <AiFillEdit className={styles.iconbtn} />
                  </button>
                </Link>
                <button
                  onClick={() => deleteItem(item._id)}
                  className={styles.button}
                >
                  <AiFillDelete className={styles.iconbtn} />
                </button>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
      )}
      ;
      <Footer />
    </main>
  );
};
export default viewPage;
