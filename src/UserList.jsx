import App from "./App"


function UserList () {
    const userLists=[
        {id:1, name:'Amina jama', email:'(amina@gmail.com)'},
        {id:2, name:'cisamn warfaa', email:'(cisman@gmail.com)'},
        {id:2, name:'warfaa', email:'(warfaa@gmail.com)'},

    ]
    return(
        <div>
            <h1>list of users</h1>
           
            <ul>
                {
                    userLists.map(userList => (
                        <li key={userList.id}>{userList.name} {userList.email}</li>
                    ))
                   
                }
            </ul>



        </div>
    )
}
export default UserList