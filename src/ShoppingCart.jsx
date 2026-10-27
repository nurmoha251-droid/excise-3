import React, { useState } from "react";

const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    const handleAddItem = () => {
        if (itemName && itemPrice) {
            setItems([...items, { name: itemName, price: parseFloat(itemPrice) }]);
            setItemName("");
            setItemPrice("");
        }
    };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input type="text" placeholder="Enter item name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <input type="number" placeholder="Enter item price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} 
             ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      {/* <div>
        <input type="text" placeholder="Enter item name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        <input type="number" placeholder="Enter item price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>   

       < ul>
        {items.map((item, index) => (
          <li key={index}>
        </li>
        ))}
      </ul>

      </div> */}
        <h2>Total: ${items.reduce((total, item) => total + item.price, 0).toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;