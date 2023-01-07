const fs = require("fs");
const write = function (v) {  
    let srg = JSON.stringify(v);    
    var dir = './logs';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    const logpath = "./logs/new.log";
    var str = "\n"+ new Date().toLocaleString()+' =========================>'+"\n Result : "+srg+"\n";    
    fs.appendFile(logpath,str,()=>{}); 
}


module.exports = {write};