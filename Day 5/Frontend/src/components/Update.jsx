import React from "react";
import axios from "axios";
const Update = () => {
    const handleUpdate=async (e)=>{
        e.preventDefault();
        const id=e.target.id.value;
        const name=e.target.name.value;
        const age=e.target.age.value;
        const data={name, age}
        await axios.put(`http://localhost:9000/users/${id}`,data);
        alert("User Updated Successfully");
    }
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Enter User ID" name="id"/>
                <input type="text" placeholder="Enter User Name" name="name"/>
                <input type="number" placeholder="Enter User Age" name="age"/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default Update;