import React from 'react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, description }) => (
  <motion.article whileHover={{ y: -6 }} className="dashboard-card card">
    <strong>{title}</strong>
    <h3>{value}</h3>
    <p>{description}</p>
  </motion.article>
);

export default DashboardCard;
