import {useEffect, useState} from 'react'

function App(){
const [useeffect,setUseeffect] = useState("")

const [user, setUser]= useState("Hello")
      useEffect(() => {
document.title=   [useeffect , user ] ;

      });

      // useEffect(()=>{
      //    document.title=;
   
      // })


return(

      <>
  
            <h2>Enter your name</h2>
            <input
             type="text"
             value={useeffect}
             onChange={(e)=>setUseeffect(e.target.value)} />
            <h2>Choos Greeting:</h2>
            <input
             type="text"
             value={user}
             onChange={(e)=>setUser(e.target.value)} />


      </>
)











}


export default App;