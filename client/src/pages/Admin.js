import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, body, userId: auth.currentUser.uid })
      .then(response => {
        setPosts([...posts, response.data]);
        setTitle('');
        setBody('');
        alert('Publicación creada exitosamente.');
      })
      .catch(error => {
        console.error('Hubo un error al crear la publicación.', error);
        alert('Hubo un error al crear la publicación. Por favor, inténtalo de nuevo.');
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Hubo un error al cerrar sesión.', error);
      });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
