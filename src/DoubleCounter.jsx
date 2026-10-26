import { useState } from "react";

const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
   
  };

  const decrement = () => {
    setCount(count - 1);
  };
    const incrementDouble = () => {
    setDoubleCount(doubleCount +1 );
  };
const decrementDouble = () => {
    setDoubleCount(doubleCount - 1);
  }
  return (
    <div> 
    <div>
      <h1>Double Counter: </h1>
      <h2>Count A: {count}</h2>

      <button onClick={increment}>Count A+</button>
      <button onClick={decrement} disabled={count === 0}>
        Count A-  </button>
    </div><br /><br />
    <div>
      <h2>Double Count: </h2>
      <h3>Count B: {doubleCount}</h3>
        <button onClick={incrementDouble}>
            Count B+</button>
        <button onClick={decrementDouble} disabled={doubleCount === 0}>
        Count B-  </button>



    </div>
    <button onClick={() => {setCount(0); setDoubleCount(0)}}>Reset</button>
    
    </div>
  );
};

export default DoubleCounter;