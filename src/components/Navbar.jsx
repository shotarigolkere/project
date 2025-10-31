import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = React.memo(() => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h1>AutoPortal</h1></Link>
      </div>
      <div className="nav-links">
        <Link to="/">მთავარი</Link>
        <Link to="/sell-car" className="sell-btn">განთავსება</Link>
        
        {user ? (
          <div className="user-info">
            <span>გამარჯობა, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">გასვლა</button>
          </div>
        ) : (
          <>
            <Link to="/login">შესვლა</Link>
            <Link to="/register">რეგისტრაცია</Link>
          </>
        )}
      </div>
    </nav>
  );
});

export default Navbar;