import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ text = 'Loading VOID Activewear' }) => (
  <motion.div
    className="site-loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
  >
    <motion.div
      className="site-loader-mark"
      animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      VOID
    </motion.div>
    <div className="spinner" />
    <p>{text}</p>
  </motion.div>
);

export default Loader;
