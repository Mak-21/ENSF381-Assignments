import React from 'react';
import '../App.css';
function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>{item.name}</div>
      <div>Price: ${item.price}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Total: ${item.price * item.quantity}</div>
      <button onClick={() => onUpdateCartQty(item, item.quantity - 1)}>-</button>
      <button onClick={() => onUpdateCartQty(item, item.quantity + 1)}>+</button>
      <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
