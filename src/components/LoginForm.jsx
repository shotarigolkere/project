import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>შესვლა</h2>
      <label>Email:</label>
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit" className="btn-primary">შესვლა</button>
    </form>
  );
}

export default LoginForm;
