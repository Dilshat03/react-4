import React, {useEffect, useState} from 'react';
import axios from "axios";

const Users = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res=>setUser(res.data))
    },[])
    return (
        <div>
            {
                user.map(user=>
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;