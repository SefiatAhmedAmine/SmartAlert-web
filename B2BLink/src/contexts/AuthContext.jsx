// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { login, register } from '@/src/utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const userData = await login(email, password);
    setUser(userData);
    return userData;
  };

  const handleSignup = async (userData) => {
    const newUser = await register(userData);
    setUser(newUser);
    return newUser;
  };

  const handleLogout = () => {
    setUser(null);
    // You might also want to clear any stored tokens or session data here
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, signup: handleSignup, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
