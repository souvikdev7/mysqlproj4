const axios = require('axios');
const util = require('util');


var arr = [];

let f1 = async() => { 
     //let r1 = await f4();     
     //return r1;    

    let r1 = await f3();
    return r1; 


}


let f2 =(v) => { 
    console.log("Result :"+ JSON.stringify(v)); 
    
}


let f3 =() => { 
    return  new Promise((resolve,reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/users/5')
        .then(response => {            
            let arr = response.data.address;            
            resolve(arr);
        })
        .catch(error => reject(error));
    });   
}

let f4 =() => { 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(50);
        },2000);
    });    
}





f1().then(f2);





