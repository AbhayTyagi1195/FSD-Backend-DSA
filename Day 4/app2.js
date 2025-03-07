const express=require('express');
const fs=require('fs/promises');
const app=express();
let users=[]
app.use(express.json());
const read_data=async()=>{
     users =JSON.parse(await fs.readFile('./data.json', 'utf-8'));
}
const write_data=async()=>{
    await fs.writeFile("./data.json",JSON.stringify(users));
}
read_data().then(r => {})
app.get('/getdata',async(req,res)=>{
    res.json(users);
})
app.post("/users",(req,res)=>{
    const {name,age}=req.body;
    const new_id=users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const new_user={id:new_id,name,age};
    users.push(new_user);
    write_data().then(r => {})
    res.status(200).json({message:"Data Received.",data:new_user});
})
app.put("/users/:id",(req,res)=>{
    const id=req.params.id;
    const {name,age}=req.body;
    const index=users.findIndex(user=>user.id==id);
    if(!name || !age ) {
        res.status(400).json({message: "Name and Age are required."});
        return;
    }
    if(index==-1){
        res.status(404).json({message:"User not found."});
    }else{
        users.splice(index,1);
        write_data().then(r => {})
        res.status(200).json({message:"Data Updated.",data:users[index]});
    }
})
app.delete("/users/:id",(req,res)=>{
    const id=req.params.id;
    const index=users.findIndex(user=>user.id==id);
    if(index==-1){
        res.status(404).json({message:"User not found."});
    }else{
        users.splice(index,1);
        write_data().then(r => {})
        res.status(200).json({message:"Data Deleted."});
    }
})
app.listen(9000,()=>{
    console.log('Server started at http://localhost:9000');
})