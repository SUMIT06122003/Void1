import React, { useContext } from 'react';
import { useAuth } from '../hooks/useAuth';
import OrderContext from '../context/OrderContext';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/helpers';

const Orders = () => {
  const { user } = useAuth();
  const { orders } = useContext(OrderContext);
  const userOrders = orders.filter((order) => order.userId === user?.id);

  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="page-section orders-page">
      <div className="section-heading">
        <div>
          <h2 className="section-title">My Orders</h2>
          <p className="section-subtitle">Review your recent purchases and order history.</p>
        </div>
      </div>
      {userOrders.length === 0 ? (
        <div className="empty-state card">
          <h3>No orders found</h3>
          <p>Your purchases will appear here after checkout.</p>
        </div>
      ) : (
        <div className="grid-gap order-grid">
          {userOrders.map((order) => (
            <article key={order.id} className="card order-card">
              <div className="order-card-header">
                <strong>{order.id}</strong>
                <span>{order.status}</span>
              </div>
              <p>{order.date}</p>
              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item.id} className="order-item-row">
                    <span>{item.name} ×{item.quantity}</span>
                    <strong>{formatCurrency(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
              <div className="order-summary">
                <span>Total</span>
                <strong>{formatCurrency(order.total)}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Orders;
