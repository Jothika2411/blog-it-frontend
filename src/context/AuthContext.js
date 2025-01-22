import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data using the token or decode it if it contains user info
      setUser({ token }); // Simplified for demonstration
    }
  }, []);

  const signIn = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
