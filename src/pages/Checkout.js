import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../hooks/useCart';
import { useContext } from 'react';
import OrderContext from '../context/OrderContext';
import { formatCurrency } from '../utils/helpers';

const Checkout = () => {
  const { user } = useAuth();
  const { cartItems, subtotal, clearCart } = useCart();
  const { placeOrder } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [shippingAddress, setShippingAddress] = useState(user?.address || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const navigate = useNavigate();

  const total = useMemo(() => subtotal + 99, [subtotal]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!shippingAddress || !phone) {
      return;
    }

    placeOrder({
      userId: user.id,
      items: cartItems,
      shipping: 'Standard shipping',
      paymentMethod,
      total,
      address: shippingAddress,
      phone,
    });
    clearCart();
    navigate('/orders');
  };

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section checkout-page">
      <div className="checkout-grid">
        <form className="checkout-form card" onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Complete your checkout securely and place your order.</p>

          <label>
            Shipping address
            <textarea value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} rows={4} required />
          </label>
          <label>
            Phone number
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>
          <label>
            Payment method
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </select>
          </label>

          <button type="submit" className="button-primary">
            Place Order
          </button>
        </form>

        <aside className="order-overview card">
          <h3>Order overview</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>{formatCurrency(99)}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
          <div className="overview-notice">
            <p>Orders are processed instantly with demo checkout data for a smooth simulated experience.</p>
          </div>
        </aside>
      </div>
    </motion.section>
  );
};

export default Checkout;
