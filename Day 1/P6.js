const fs=require('fs');
const data=". I am the new appended Data file";
fs.appendFile("./data.txt",data,(err)=>{
    if(err){
        console.log("Error appending file",err);
        return;
    }
    console.log("File appended successfully");
});