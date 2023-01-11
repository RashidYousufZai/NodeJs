const fs = require("fs");


// create a file with write 

fs.writeFileSync('./bio.txt' , "My name is rashid");

// Write some thing on file 
fs.appendFileSync('./bio.txt', " And i am a software engineer");



const data = fs.readFileSync('./bio.txt');
console.log(data.toString());

fs.renameSync("./bio.txt", "./new.txt");

fs.unlinkSync("./new.txt")