import React, { useContext, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import ProductContext from '../context/ProductContext';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/helpers';

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductById } = useContext(ProductContext);
  const product = useMemo(() => getProductById(id), [getProductById, id]);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(product?.variants?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.variants?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  if (!product) {
    return (
      <div className="page-section empty-state card">
        <h2>Product not found</h2>
        <p>The product you selected is unavailable or has been removed.</p>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section product-detail-page">
      <div className="detail-grid card">
        <div className="detail-visual" style={{ position: 'relative' }}>
          <img src={selectedImage || product.image} alt={product.name} onError={(e) => {
            e.target.src = '/logo192.png';
          }} />
          {product.images?.length > 1 && (
            <div className="product-thumb-row">
              {product.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  className={image === (selectedImage || product.image) ? 'active' : ''}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`${product.name} option`} />
                </button>
              ))}
            </div>
          )}
          {discount > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#ef4444',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Save {discount}%
            </div>
          )}
        </div>
        <div className="detail-copy">
          <span className="brand-pill">Premium Quality</span>
          <h1>{product.name}</h1>
          <div className="detail-rating">
            <FaStar color="#f59e0b" /> <span>{product.rating.toFixed(1)}</span>
            {product.reviews && <span style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>({product.reviews} reviews)</span>}
          </div>
          <div className="detail-pricing">
            <strong>{formatCurrency(product.price)}</strong>
            <span>{formatCurrency(product.originalPrice)}</span>
          </div>
          <p style={{ color: '#d4d4d4', lineHeight: 1.6, marginBottom: '20px' }}>{product.description}</p>

          {product.variants?.colors && product.variants.colors.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Color</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.variants.colors.map((color) => (
                  <motion.button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '10px 16px',
                      border: selectedColor === color ? '2px solid #f5f5f5' : '1px solid #525252',
                      background: selectedColor === color ? '#e5e7eb' : '#1b1b1b',
                      color: selectedColor === color ? '#050505' : '#f5f5f5',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {product.variants?.sizes && product.variants.sizes.length > 0 && product.variants.sizes[0] !== 'One Size' && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Size</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.variants.sizes.map((size) => (
                  <motion.button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '10px 16px',
                      border: selectedSize === size ? '2px solid #f5f5f5' : '1px solid #525252',
                      background: selectedSize === size ? '#e5e7eb' : '#1b1b1b',
                      color: selectedSize === size ? '#050505' : '#f5f5f5',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      minWidth: '50px',
                      textAlign: 'center',
                    }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Quantity</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #525252',
                  borderRadius: '6px',
                  background: '#1b1b1b',
                  color: '#f5f5f5',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                }}
              >
                −
              </motion.button>
              <span style={{ fontWeight: 600, minWidth: '40px', textAlign: 'center' }}>{quantity}</span>
              <motion.button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid #525252',
                  borderRadius: '6px',
                  background: '#1b1b1b',
                  color: '#f5f5f5',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                }}
              >
                +
              </motion.button>
            </div>
          </div>

          <div className="detail-actions">
            <motion.button
              type="button"
              className="button-primary"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add {quantity} to Cart
            </motion.button>
            <motion.button
              type="button"
              className="button-secondary"
              onClick={() => navigate('/cart')}
              whileHover={{ scale: 1.02 }}
            >
              View Cart
            </motion.button>
          </div>

          <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid #343434' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>Specifications</h3>
            <ul className="feature-list">
              {product.features && product.features.map((feature) => (
                <li key={feature} style={{ padding: '8px 0' }}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
