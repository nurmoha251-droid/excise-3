// App.jsx
import React, { useState } from 'react';
import CartContext from './CartContext';
import ProductItem from './ProductItem';
import CartSummary from './CartSummary';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="mangos" price={12} />
      <ProductItem itemId={2} itemName="Geepas" price={16} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;
