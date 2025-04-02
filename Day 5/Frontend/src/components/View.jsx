import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('http://localhost:9000/users');
        console.log(res);
        setUsers(res.data);
    }

    return (
        <div>
            <h1>Registered Users List</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </table>
            <br/>
        </div>
    )
}

export default View