const fs = require("fs");

const bioData = {
    name : "Rashid", 
    age : 21,
    channel : "Parhlo Programing"
};


// convet Object data in to json file through stringify
const jsonData = JSON.stringify(bioData);
// {"name":"Rashid","age":21,"channel":"Parhlo Programing"}


// convet json data in to object file through parse
const objdata = JSON.parse(jsonData);
// { name: 'Rashid', age: 21, channel: 'Parhlo Programing' }

const data = JSON.stringify(bioData);
fs.writeFile("data.json" , data , () => {
    console.log("done")
} );

fs.readFile("data.json" , "utf-8" , (err, data) => {
    console.log(data);
});