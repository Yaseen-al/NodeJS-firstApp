//Because we are importing a built in module we don't need to add require('.\nameOfFile') 
//But we just mention the name of the module

//cast the module in a contant to prevent overriding it by mistake
const pathModule = require('path');
/**
  Note that nodeJS wraps your module in a function to be exectuted this function have __filename 
  and directory as inputs that's why we can have access to this function inputs

  (function(exports, require, module, __filename, __dirname) { 
    // Module code actually lives in here 
    }); 

 */

//Now you can access the public methods and variables in this module
var currentPath = pathModule.parse(__filename);
console.log(currentPath);