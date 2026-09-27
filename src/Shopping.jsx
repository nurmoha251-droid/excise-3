import { useState } from "react";
import "./index.css";

const Shopping = () => {
  const [Shopping, setShopping] = useState([]);
  const [inputUser, setInput] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  // const [inputQuantatity, setInputQuantatity]= useState(1)

  const handleShoppingCart = () => {
    if (!inputUser || !inputPrice) return;

    const newShopping = {
      id: crypto.randomUUID(),
      name: inputUser,
      price: parseFloat(inputPrice),
      quantity: 1,
    };
    setShopping([...Shopping, newShopping]);

    setInput("");
    setInputPrice("");
    // setInputQuantatity(1);

    //    console.log(newShopping)
  };

  const removeItem = (id) => {
    // const newRemove = Shopping.filter(Shopping => Shopping.id !== id)
    setShopping(Shopping.filter((Shopping) => Shopping.id !== id));
  };

  const incriment = (id) => {
    // const newUpdate =

    setShopping( Shopping.map((Shopping) =>  Shopping.id === id ? { ...Shopping, quantity: Shopping.quantity + 1 } : Shopping ));
  };
const totalPrice = Shopping.reduce((total, Shopping) => total + Shopping.price * Shopping.quantity, 0);

  return (
    
    <div className="shopping-cart">
      <h1>Simple Shopping Chart</h1>
      <div className="add-product">
        <h3>Add a Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setInput(e.target.value)}
          value={inputUser}
        />

        <input      
          type="number"
          placeholder="Price"
          onChange={(e) => setInputPrice(e.target.value)}
          value={inputPrice}
        />

        <button onClick={handleShoppingCart}>Add to Cart</button>
      </div>

      <div  className="cart-items">
        {Shopping.length === 0 ? (
          <p>the cart is empty</p>
        ) : (
          <>
            <h2 >Products in Cart</h2>

            <ul>
              {Shopping.map((shoppings) => (
                <li key={shoppings.id}>
                  {" "}
                  <strong> {shoppings.name} </strong> ---$
                  {shoppings.price.toFixed(2)}
                  <div>
                    {" "}
                    Quantatiy:          
                      <button>-</button>
                    {shoppings.quantity}
                    <button onClick={() => incriment(shoppings.id)}>+</button>
                  </div>
                  <button onClick={() => removeItem(shoppings.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </>
        )}
      </div>
    </div>
  );

    function newFunction() {
        <rt>re</rt>;
    }
};
export default Shopping;

