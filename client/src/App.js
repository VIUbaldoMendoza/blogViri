import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/auth">Login/Registro</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<PrivateRoute component={Admin} />} />
      </Routes>
    </Router>
  );
}

export default App;

