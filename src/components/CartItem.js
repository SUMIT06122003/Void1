import React from 'react';
import { BiTrash, BiMinus, BiPlus } from 'react-icons/bi';
import { formatCurrency } from '../utils/helpers';

const CartItem = ({ item, onQuantityChange, onRemove }) => (
  <div className="cart-item card">
    <img src={item.image} alt={item.name} className="cart-item-image" />
    <div className="cart-item-details">
      <div>
        <h4>{item.name}</h4>
        <p>{formatCurrency(item.price)} x {item.quantity}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-control">
          <button type="button" onClick={() => onQuantityChange(item.id, item.quantity - 1)}><BiMinus /></button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => onQuantityChange(item.id, item.quantity + 1)}><BiPlus /></button>
        </div>
        <button type="button" className="text-button" onClick={() => onRemove(item.id)}>
          <BiTrash /> Remove
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
