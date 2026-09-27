import React, { useState } from 'react';

 function QuantitySelector({ min = 1, max = 10 }) {
  const [quantity, setQuantity] = useState(1);

  // Increase quantity up to the maximum limit
  const increment = () => {
    if (quantity < max) {
      setQuantity(prevQty => prevQty + 1);
    }
  };

  // Decrease quantity down to the minimum limit
  const decrement = () => {
    if (quantity > min) {
      setQuantity(prevQty => prevQty - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Decrement Button */}
      <button 
        onClick={decrement} 
        disabled={quantity <= min}
      >
        -
      </button>

      {/* Controlled Input Field */}
      <input
        type="number"
        value={quantity}
        readOnly
        style={{ width: '40px', textAlign: 'center' }}
      />

      {/* Increment Button */}
      <button 
        onClick={increment} 
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}
export default Ggg;