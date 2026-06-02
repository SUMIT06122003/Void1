import React, { useContext } from 'react';
import OrderContext from '../context/OrderContext';
import { useAuth } from '../hooks/useAuth';
import { formatCurrency } from '../utils/helpers';

const MyOrders = () => {
  const { orders } = useContext(OrderContext);
  const { user } = useAuth();
  const myOrders = orders.filter((order) => order.userId === user?.id);

  return (
    <div className="dashboard-panel">
      <h3>My orders</h3>
      {myOrders.length ? (
        <div className="grid-gap order-grid">
          {myOrders.map((order) => (
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
      ) : (
        <div className="empty-state card">
          <h4>No order history yet</h4>
          <p>Once you place a demo order, it will appear here instantly.</p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
