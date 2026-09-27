import { useState } from "react";


const TodoList = () => {

        const [todolist, setTodolist]=useState([])
        const [inputUser,setInputUser]=useState("")

        const handelInputUser = ()=> {
            const newtodo = {
                id: crypto.randomUUID,
                text:inputUser,
                complete: false
            }

            setTodolist([...todolist, newtodo])
            console.log(newtodo);
        }
    

    return(
        <>
            <div>
                <h2>TO-DO List</h2>
                <input 
                type="text" 
                placeholder="enter to-do"
                onChange={(e)=>setInputUser(e.target.value)} 
                value={inputUser}/>
                <button onClick={handelInputUser}>Add</button>
                <ul>{
                    
                   
                    todolist.map(todos=>(
                         <li>{todos.text} </li>
                    ))
                  }
                </ul>
            </div>
        

        
        </>
    )
}

export default TodoList;