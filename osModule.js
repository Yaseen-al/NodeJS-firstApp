const osModule = require('os');

let totalMem = osModule.totalmem();
let freeMem = osModule.freemem();
let userInfo = osModule.userInfo()

console.log(`Total memmory is: ${totalMem/1000000}`)
console.log(freeMem)

console.log(`user uid: ${userInfo.uid}`)
console.log(`user name: ${userInfo.username}`)