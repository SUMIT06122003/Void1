import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (register({ name, email, password, phone, address })) {
      navigate('/dashboard');
    }
  };

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section auth-page">
      <div className="auth-card card">
        <h2>Create your Void account</h2>
        <p>Register now and start shopping premium activewear with demo checkout.</p>
        <form onSubmit={handleSubmit} className="form-grid">
          <label>
            Full name
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" required />
          </label>
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          </label>
          <label>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>
          <label>
            Phone number
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required />
          </label>
          <label>
            Shipping address
            <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3} required />
          </label>
          <button className="button-primary" type="submit">Register</button>
        </form>
        <p className="form-note">
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </motion.section>
  );
};

export default Register;
