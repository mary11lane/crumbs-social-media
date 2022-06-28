import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCookieBite } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/CreatePage.module.css';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const editPage = () => {
  const { id } = useParams();
  const url = 'http://localhost:5000/items';
  const [username, setUsername] = useState('');
  const [filename, setFilename] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('username', username);
    formData.append('image', filename);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);

    axios.put(`${url}/${id}`, formData);
  };

  const fetchData = async () => {
    const { data } = await axios.get(`${url}/${id}`);
    setUsername(data.username);
    setTitle(data.title);
    setDescription(data.description);
    setCategory(data.category);
    setFilename(data.image);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const notify = () =>
    toast('Crumbs updated!', {
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
      <p>
        Leave your trail of crumbs and inspire others to eat healthy...{' '}
        <FaCookieBite />{' '}
      </p>
      <div className={styles.container}>
        <form onSubmit={(e) => submit(e)} encType="multipart/form-data">
          <input
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            value={username}
            placeholder="username"
            type="text"
          ></input>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            value={title}
            placeholder="title"
            type="text"
          ></input>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            value={description}
            placeholder="description"
            type="textarea"
          ></textarea>
          <input
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            value={category}
            placeholder="category"
            type="text"
          ></input>
          <input
            className={styles.file}
            onChange={onChangeFile}
            id="image"
            placeholder="image"
            type="file"
            filename="image"
          ></input>
          <button className={styles.button} onClick={notify}>
            Update
          </button>
          <ToastContainer />
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default editPage;
