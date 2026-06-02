import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useAuth();

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section profile-page">
      <div className="card profile-card">
        <h2>Profile</h2>
        <div className="profile-grid">
          <div>
            <p className="profile-label">Name</p>
            <strong>{user?.name}</strong>
          </div>
          <div>
            <p className="profile-label">Email</p>
            <strong>{user?.email}</strong>
          </div>
          <div>
            <p className="profile-label">Phone</p>
            <strong>{user?.phone}</strong>
          </div>
          <div>
            <p className="profile-label">Shipping address</p>
            <strong>{user?.address}</strong>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
