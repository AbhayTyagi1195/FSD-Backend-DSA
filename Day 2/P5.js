const http=require('http');
const fs=require('fs/promises');
const server=http.createServer(async (req,res)=>{
    const data=await fs.readFile('./data.json');
    const My_Data=JSON.parse(data);
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const name=My_Data.map((item)=>{
        return item.name
    });
    console.log(JSON.stringify(name));
    res.end(JSON.stringify(name));
});
server.listen(9000,(err)=>{
    if(err){
        console.log('Error:',err);
    }
    console.log('Server is running at http://localhost:9000/');
});