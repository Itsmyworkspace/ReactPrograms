import { useEffect, useState } from "react"

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchUsers();
    },[])

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        console.log(result);
        setUsers(result);
    }

    return(
        <>
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user)=>(
                    <li  key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default UsersList