import { useEffect, useState } from "react";
import UserList from "./UserList";
function App() {

const lists = []
const items = null
      return(
            <div>     

<UserList/>
               {/* {   lists.length > 0  ? 
               (   

      <ul>
{
  
             
            lists.map((list , index)=>(
                  <li key={index}>{list}</li>
            ))
      
}

     
</ul> ) : <p>this is empty</p>
} */}

{/* 
{
    items ? ( <p> {items.name} </p>): <p>this is empty</p>
} */}
 </div>
      )
}


export default App;
