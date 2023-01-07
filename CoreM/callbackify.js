
const util = require('util');

const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

let f1 = async(a)=>{
    //await timer(2000); 
    return "123321"+a;  
}


const K = util.callbackify(f1);

K('Hello',(error,result)=>{
    if (error)
        throw new Error("Error Occured");

    console.log(result);
});

