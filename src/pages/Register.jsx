import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register(username, email, password)) {
      navigate('/'); // მთავარ გვერდზე გადასვლა
    } else {
      alert('რეგისტრაცია ვერ მოხერხდა. შეავსეთ ყველა ველი.');
    }
  };

  return (
    <div className="auth-form-container">
      <h2>რეგისტრაცია</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>მომხმარებლის სახელი:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <label>ელ. ფოსტა:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>პაროლი:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="auth-btn">რეგისტრაცია</button>
      </form>
    </div>
  );
};

export default Register;