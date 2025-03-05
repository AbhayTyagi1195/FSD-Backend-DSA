const express=require('express');
const fs=require('fs/promises');
const app=express();
app.use(express.json());
const read_data=()=>{
    let users = fs.readFile('./data.json', 'utf-8');
}
const write_data=()=>{
    fs.writeFile('./data.json', JSON.stringify(users, null, 2)).then(r  =>
    {});
}
app.get('/getdata',(req,res)=>{
    read_data()
    res.json(users);
})
app.listen(9002,()=>{
    console.log('Server started at http://localhost:9002');
})