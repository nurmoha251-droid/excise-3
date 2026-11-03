import React, { useState } from "react";

const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [quantity, setQuantity] = useState(1);
    const handleAddItem = () => {
        if (itemName && itemPrice) {
            setItems([...items, { name: itemName, price: parseFloat(itemPrice), quantity: parseInt(quantity) }]);
            setItemName("");
            setItemPrice("");
            setQuantity(1);
        }
    };

  return (
    <div>
      <h1>Add Item to Cart</h1>
      <input type="text" placeholder="Enter item name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <input type="number" placeholder="Enter item price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
      
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
     
        <h2>Items in Cart:</h2>
        {items.map((item, index) => (
          <> 
          <li key={index}>
            {item.name} 
              - ${item.price.toFixed(2)}
        
          </li>
          <li>  Quantity: {item.quantity > 1 ? ` x ${item.quantity}` : ""} <button onClick={() => setItems(items.map((i, idx) => idx === index ? { ...i, quantity: i.quantity + 1 } : i))}> +</button> <button onClick={() => setItems(items.filter((_, idx) => idx !== index))}>-</button>  </li>
          <button onClick={() => setItems(items.filter((_, idx) => idx !== index))}>Remove</button>
          </>
       ))}
      </ul>
   
        <h2>Total: ${items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;