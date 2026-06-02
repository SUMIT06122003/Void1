import React, { createContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('void-activewear-cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('void-activewear-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id);
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      toast.success('Added to cart');
      return [...currentItems, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    toast.info('Removed item from cart');
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart has been cleared');
  };

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, updateQuantity, removeItem, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
