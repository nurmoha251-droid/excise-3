import { useState } from "react";


function App(){
const[turn,setTurn]= useState(false)
const forTurn = ()=> {
setTurn(!turn)
}


return(
  <>
    <p >The Button is  {turn ? 'off' : 'on'} </p>
    
    <button on onClick={forTurn}>Turn {turn ? 'on' : 'off'}</button>
  </>
)










}


export default App;