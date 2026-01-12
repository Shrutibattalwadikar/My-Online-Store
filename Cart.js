import React from 'react';
import { useCart } from './CartContext';


function Cart() {
  const { cart, dispatch } = useCart();

  const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  const updateQuantity = (id, quantity) => {
    const qty = Math.max(1, parseInt(quantity, 10));
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <p>{item.name} - ${item.price} x {item.quantity}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e => updateQuantity(item.id, e.target.value)}
            className="quantity-input"
          />
          <button className="btn remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
