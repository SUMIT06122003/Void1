import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => (
  <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section dashboard-page">
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar card">
        <h2>Dashboard</h2>
        <nav className="dashboard-nav">
          <NavLink to="" end>Overview</NavLink>
          <NavLink to="orders">Orders</NavLink>
          <NavLink to="wishlist">Wishlist</NavLink>
          <NavLink to="addresses">Addresses</NavLink>
          <NavLink to="settings">Settings</NavLink>
        </nav>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  </motion.section>
);

export default Dashboard;
