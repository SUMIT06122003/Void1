import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import ordersData from '../data/orders';
import { generateOrderId } from '../utils/helpers';

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(ordersData);

  const placeOrder = ({ userId, items, shipping, paymentMethod, total, address, phone }) => {
    const order = {
      id: generateOrderId(),
      userId,
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: 'Confirmed',
      shipping,
      paymentMethod,
      total,
      items,
      address,
      phone,
    };

    setOrders((prevOrders) => [order, ...prevOrders]);
    toast.success('Order placed successfully.');
    return order;
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
