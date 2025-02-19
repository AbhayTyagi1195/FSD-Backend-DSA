const http=require('http');
const server=http.createServer(async(req,res)=>{
    const data=await fetch("https://dummyjson.com/products")
    const json_data=await data.json();
    const products=json_data.products;
    res.writeHeader(200,{'Content-Type':'application/json'});
    const titles=products.map((product)=>product.title);
    res.end(JSON.stringify(titles));
});
server.listen(9000,(err)=>{
    if(err){
        throw err;
    }
    console.log('Server is running at http://localhost:9000');
});