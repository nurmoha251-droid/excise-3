import { use, useState } from "react"


const Login= () =>{
const [userName,setUserName]=useState("")
const [password,setPassword]=useState("")
const [login,setLogin]=useState()



const handleLogin=()=>{

  if(!userName || !password){
    alert("Please enter username and password")
  }
      
    setLogin({userName,password})

if(userName && password){
    setUserName("")
    setPassword("")
}
}
const handleLogout=()=>{
   
    setLogin(null)
    

}



    return(
       
        <div>
         
             <h1>Login</h1>
          <input type="text" placeholder="username" required  onChange={(e)=>setUserName(e.target.value)}   value={userName}/> <br/>
          <input type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)} value={password}/> <br/>
        {login ?<button onClick={handleLogout}>Log Out</button> 
        :  <button onClick={handleLogin}>Login</button> }


          {login && <h1>Welcome {login.userName}</h1>}
           
        </div>
    )
    
}

export default Login