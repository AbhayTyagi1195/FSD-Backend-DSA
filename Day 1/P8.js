const fs=require('fs');
console.log("Create a new Directory");
fs.mkdir("MyFolder",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Directory Created Successfully");
    }
});
