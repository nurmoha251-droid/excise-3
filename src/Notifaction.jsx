const Notifaction = ({Notification}) =>{


    return  ( 
        <div>  
          
                <h1>hello world</h1>
            
                {
                    Notification.length > 0  && ( <p> you have {Notification.length} Notification</p> )
                } 
        </div>
    )
}

export default Notifaction