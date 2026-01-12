import React from 'react';
import { useCart } from './CartContext';


function Product({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button type="button" className="btn" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
