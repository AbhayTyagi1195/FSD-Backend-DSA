const fs=require('fs/promises');
const read=async()=>{
    const data=await fs.readFile("./data.txt","utf-8");
    console.log(data);
}
read().then(r => console.log(r)).catch(e => console.log(e));
console.log("I am after reading Data");