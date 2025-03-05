const express=require('express');
const app=express();
let users=[];
app.use(express.json());
app.get("/api/users",(req,res)=>{
    res.send(users);
});
app.get("/users",(req,res)=>{
    res.send("Welcome to Backend Server using Express.");
})
app.post("/users",(req,res)=>{
    const data=req.body;
    data.id=users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(data);
    res.status(200).json({message:"Data Received.",data:data});
})
app.listen(9000,()=>{
    console.log("Server is running at http://localhost:9000");
})
