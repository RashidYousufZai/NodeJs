const os = require("os");
    // check os architecture
console.log(os.arch());

    // check os free ram space in ram
const freemem  = os.freemem();
// Mem show in bytes
console.log(freemem);
// mem show in gb
console.log(`${freemem / 1024 /1024 /1024 }`);


    // Check total memory of ram 
const total = os.totalmem();
console.log(`${total / 1024 /1024 /1024 }`);