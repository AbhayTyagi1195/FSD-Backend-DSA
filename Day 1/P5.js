const fs=require('fs');
fs.writeFile("./data.txt","I am the new latest Data file",(err)=>{
    if(err){
        console.log("Error writing file",err);
        return;
    }
    console.log("File written successfully");
});