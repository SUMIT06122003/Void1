import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/helpers';

const ProductCard = ({ product, isLoading = false }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const discount = Math.round(((product?.originalPrice - product?.price) / product?.originalPrice) * 100);

  const handleImageError = (e) => {
    e.target.src = '/logo192.png';
  };

  if (isLoading) {
    return (
      <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="loading-skeleton" style={{ paddingBottom: '100%', marginBottom: '16px' }} />
        <div className="loading-skeleton" style={{ height: '24px', marginBottom: '12px', width: '80%' }} />
        <div className="loading-skeleton" style={{ height: '16px', marginBottom: '16px', width: '60%' }} />
        <div className="loading-skeleton" style={{ height: '32px' }} />
      </div>
    );
  }

  if (!product) return null;

  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(229, 231, 235, 0.12)' }}
      transition={{ duration: 0.3 }}
      className="product-card card"
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <motion.button
          className="product-image-button"
          type="button"
          onClick={() => navigate(`/product/${product.id}`)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={handleImageError}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
        {discount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              color: '#fff',
              padding: '8px 14px',
              borderRadius: '12px',
              fontSize: '0.85rem',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
            }}
          >
            −{discount}%
          </motion.div>
        )}
      </div>
      <div className="product-meta" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <motion.h3
            style={{ marginBottom: '8px', fontSize: '1.05rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {product.name}
          </motion.h3>
          <motion.div
            className="rating-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            style={{ marginBottom: '12px' }}
          >
            <FaStar size={14} color="#e5e7eb" />
            <span style={{ color: '#d1d5db' }}>{product.rating.toFixed(1)}</span>
            {product.reviews && <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>({product.reviews})</span>}
          </motion.div>
          <motion.p
            className="product-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#9ca3af', fontSize: '0.9rem' }}
          >
            {product.description}
          </motion.p>
        </div>
        <motion.div
          className="product-price"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          style={{ marginTop: '12px', marginBottom: '16px' }}
        >
          <span style={{ color: '#e5e7eb', fontWeight: 700 }}>{formatCurrency(product.price)}</span>
          <small style={{ color: '#6b7280' }}>{formatCurrency(product.originalPrice)}</small>
        </motion.div>
      </div>
      <motion.button
        className="button-primary"
        type="button"
        onClick={() => addItem(product, 1)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ width: '100%' }}
      >
        Add to cart
      </motion.button>
    </motion.article>
  );
};

export default ProductCard;
