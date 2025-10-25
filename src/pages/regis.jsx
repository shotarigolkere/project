import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Regis = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      alert('არასწორი მომხმარებლის სახელი ან პაროლი.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>შესვლა</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>მომხმარებლის სახელი:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <label>პაროლი:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="auth-btn">შესვლა</button>
      </form>
    </div>
  );
};

export default Regis;