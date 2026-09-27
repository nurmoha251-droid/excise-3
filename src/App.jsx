import { useEffect, useState } from "react";

function App() {
  const [watch, setWatch] = useState(30);
  const[timeranning, setTimeranning]=useState(30)
  const [ranning, setRanning] = useState(false);

  useEffect(() => {
    let timerId;
    if (ranning) {
      timerId = setInterval(() => {
        setWatch((prev) => prev > 0 ? prev - 1 : 0);
          
        
        
   
    setTimeranning((prev) => prev > 0 ? prev - 1 : 0);
        
      }, 1000);

    }

    return () => clearInterval(timerId);
  }, [ranning]);

  const star = () => {
    setRanning(true);
   

    setTimeranning(watch)
    if (watch === 0) {
      setWatch(30);
      setTimeranning(30);
    }

  };
  const stop = () => {
    setRanning(false);

  };
  const reset = () => {
    setRanning(false);
    setWatch(30);
    setTimeranning(30);
  };



  return (
    <>
    <h1>Countdown Timer</h1>
    <p>Set Time(seconds):  <input type="number" min={1} onChange={(e)=>setWatch(e.target.value)} value={watch}/></p> 
      <h2> Time Left: {timeranning} </h2>
      <button disabled={ranning} onClick={star}>start</button>
      <button  disabled={!ranning} onClick={stop}>Stop</button>
      <button onClick={reset}>reset</button>





    </>
  );
}

export default App;
