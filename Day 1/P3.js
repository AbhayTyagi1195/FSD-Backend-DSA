const fs=require('fs');
const data="I am the new Data file";
fs.writeFileSync("data.txt",data);