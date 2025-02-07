const fs=require('fs');
fs.rmdir("./MyFolder",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder Deleted");
    }
});