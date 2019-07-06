/**
  A node process have a single thread so you don't want to block it with one task as you want to serve 
  as many clients as you can so you use asyn calls and callbacks to be efficient.
 */

const fsModule = require('fs')

//this will return the current files and folders in the current directory


let readdir = fsModule.readdirSync('./');

console.log('This will get files using sync',readdir);

function readDirCallBack(err, files) {
    if (err) console.log('Error', err)
    console.log(`Here is the files you have requested using async call`);
    console.log(files)
}

let readdirAsync = fsModule.readdir('./', readDirCallBack)