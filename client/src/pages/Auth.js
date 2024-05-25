import React, { useState } from 'react';
import { auth } from '../firebase'; // Asegúrate de que la configuración de Firebase está exportada desde firebase.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Usuario registrado exitosamente');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>{isRegistering ? 'Registro' : 'Inicio de Sesión'}</h1>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">
          {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
        </button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
      </button>
    </div>
  );
};

export default Auth;
