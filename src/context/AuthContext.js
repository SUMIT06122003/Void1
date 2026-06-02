import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import usersData from '../data/users';
import { DEMO_CREDENTIALS } from '../utils/constants';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    const storedUser = localStorage.getItem('void-activewear-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('void-activewear-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('void-activewear-user');
    }
  }, [user]);

  const login = (email, password) => {
    const matchedUser = users.find(
      (account) => account.email.toLowerCase() === email.toLowerCase() && account.password === password,
    );

    if (matchedUser) {
      setUser(matchedUser);
      toast.success('Welcome back to Void Activewear!');
      return true;
    }

    toast.error('Incorrect credentials. Try the demo login or register.');
    return false;
  };

  const register = ({ name, email, password, phone, address }) => {
    if (users.some((account) => account.email.toLowerCase() === email.toLowerCase())) {
      toast.error('An account already exists with that email.');
      return false;
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      phone,
      address,
      wishlist: [],
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser);
    toast.success('Your Void account is ready. Welcome!');
    return true;
  };

  const logout = () => {
    setUser(null);
    toast.info('Logged out successfully.');
  };

  const demoLogin = () => login(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, demoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
