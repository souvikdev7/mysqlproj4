const RedisServer = require('./RedisServer');
const redisObj = new RedisServer();
const key = "fname";


// Retrive data
// redisObj.getData(key).then((result) => {
//      console.log(result);
// });



// Set data
//redisObj.setData(key,"Harish",2);


//redisObj.setData("result",{ pos: 'Tech Writer', Org: 'GFG' },1);
/*
var arr1 = [0,'dd'];
async function abc()
{
    let keyName = 'result';
    let c =  await redisObj.getData(keyName);    
    arr1.push(c);
    console.log(arr1);
}
abc();
console.log(arr1);
*/



// HASHING   

redisObj.setHashData("users","studen1",{ id: 22, fname: 'Sagar', laname:'Kumar' });
//redisObj.setHashData("users","studen2",{ id: 25, fname: 'Mohan', laname:'Lal' });


/*var arr1 = [0,'dd'];
async function abc()
{   
    let parentkey = "users";
    
    let key1 = 'studen1';
    let c =  await redisObj.getHashData(parentkey,key1);    
    arr1.push(c);

    let key2 = 'studen2';    
    let d =  await redisObj.getHashData(parentkey,key2);    
    arr1.push(d);

    console.log(arr1);
}
abc();*/

var arr1 = {};
async function abc()
{   
    let parentkey = "users";    
    let c =  await redisObj.getALLHashData(parentkey);    
    arr1.d = c;    
    
    console.log(arr1);
}
abc();
//console.log(arr1);

//Delete data
//redisObj.deleteData("users");
let a=10;