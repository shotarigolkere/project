import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function RegisterForm() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('პაროლები არ ემთხვევა');
      return;
    }
    register(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>რეგისტრაცია</h2>
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
      <label>Confirm Password:</label>
      <input
        type="password"
        required
        value={passwordConfirm}
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {error && <p className="error-text">{error}</p>}
      <button type="submit" className="btn-primary">რეგისტრაცია</button>
    </form>
  );
}

export default RegisterForm;
