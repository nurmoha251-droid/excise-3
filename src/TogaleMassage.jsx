import { useState } from "react"


const TogaleMassage =()=>{

const [massage,setMaasage]=useState(false)

const togle=()=>{setMaasage(!massage)}
    return(
        <div> 
<button onClick={togle}>
    {
        massage ? 'Hide button': 'Show button'
    }
</button>

{   massage && <p>this is the massage</p> }
</div>

    )
}

export default TogaleMassage