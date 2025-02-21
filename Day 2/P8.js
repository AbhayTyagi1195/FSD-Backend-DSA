const http=require("http")
const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    const data=await fetch("https://fakestoreapi.com/products")
    const json_data=await data.json()
    const my_html=`<html lang="en">
    <head>
        <title>Products</title>
        <style>
            .container{
                align-items: center;
                display: flex;
                flex-direction: column;
                margin: 10px;
                padding: 10px;
                border: 1px solid white;
                background-color: black;
                color: white;
            }
            .container img{
                align-self: center;
            }
            img{
                width: 100px;
                height: 100px;
        </style>
    </head>
    <body style="background-color: black; color:white;">
        <h1 align="center">Products</h1>
        ${json_data.map((product) => {
        return `<div class="container">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.price}</p>
            <hr>
        </div>`;
        }).join('')
    }    
    </body>
    </html>`
    res.end(my_html)
})
server.listen(9000,(err)=>{
    if(err) throw err
    console.log("Server is running at http://localhost:9000")
})