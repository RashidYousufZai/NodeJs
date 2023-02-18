const fs = require("fs");         //To include the File System module, use the require() method:

                    // writeFileSync
// if the file exist add "welcome to node js" other wise create a file and add it on that file. It will remove previous data

fs.writeFileSync('read.txt' , "welcome to node js"); 

                    // write in existing FileSync or not be
// if the file exist add "welcome to node js" other wise create a file and add it on that file and previous data will remaim same.

fs.appendFileSync('read.txt' , "Hello rashid");


                    // Read existing file
// to read existing file it always return data in form of buffer then in need to convert into string

const data = fs.readFileSync('read.txt');
console.log(data.toString());

                    // rename file
// it just rename the name of file
fs.rename("read.txt" , "ReadWrite.txt", () =>{   } );