import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);


  const login = (username, password) => {
    // მარტივი იმიტაცია: ნებისმიერი არა ცარიელი მონაცემი 'test'/'12345'
    if (username && password && (username === 'test' || password === '12345')) {
      const fakeUser = { id: 1, username: username, email: "user@example.com" };
      setUser(fakeUser);
      localStorage.setItem('user', JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  // იმიტირებული რეგისტრაცია
  const register = (username, email, password) => {
    if (username && email && password) {
      const fakeUser = { id: Date.now(), username, email };
      setUser(fakeUser);
      localStorage.setItem('user', JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  // გასვლა
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // აპლიკაციის ჩატვირთვისას მომხმარებლის მდგომარეობის შემოწმება
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const contextValue = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};