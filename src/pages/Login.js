import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login, demoLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@void.com');
  const [password, setPassword] = useState('demo1234');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    }
  };

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section auth-page">
      <div className="auth-card card">
        <h2>Login to Void</h2>
        <p>Use the demo account to explore the full storefront.</p>
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          </label>
          <label>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>
          <button className="button-primary" type="submit">Login</button>
          <button type="button" className="button-secondary" onClick={demoLogin}>Demo Login</button>
        </form>
        <p className="form-note">
          Don&apos;t have an account? <Link to="/register">Register here</Link>.
        </p>
      </div>
    </motion.section>
  );
};

export default Login;
