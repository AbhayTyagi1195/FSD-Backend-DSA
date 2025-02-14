const http=require("http")
const fs=require("fs/promises")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    fs.readFile("./data.json","utf-8").then((data)=>{
        res.end(data);
    }).catch((err)=>{
        res.end("Error in reading file");
    });
});
server.listen(9001,()=>{
    console.log("Server is running at http://localhost:9001");
})
