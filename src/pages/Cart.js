import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/helpers';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  const shippingCost = 99;
  const total = subtotal + shippingCost;

  if (!cartItems.length) {
    return (
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section empty-state card">
        <h2>Your cart is empty</h2>
        <p>Explore our premium activewear collection and add items to get started.</p>
        <button type="button" className="button-primary" onClick={() => navigate('/shop')}>
          Start Shopping
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section cart-page">
      <h2 className="section-title">Shopping Cart</h2>
      <p className="section-subtitle">Review your items before checking out.</p>

      <div className="cart-content grid-gap">
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <CartItem
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            </motion.div>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="cart-summary card"
        >
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal ({cartItems.length} items)</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{formatCurrency(shippingCost)}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total Amount</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
          <motion.button
            type="button"
            className="button-primary"
            onClick={() => navigate('/checkout')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%', marginBottom: '12px' }}
          >
            Proceed to Checkout
          </motion.button>
          <motion.button
            type="button"
            className="button-secondary"
            onClick={() => navigate('/shop')}
            style={{ width: '100%', marginBottom: '12px' }}
          >
            Continue Shopping
          </motion.button>
          <button
            type="button"
            className="button-secondary"
            onClick={clearCart}
            style={{ width: '100%' }}
          >
            Clear Cart
          </button>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default Cart;
