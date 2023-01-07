
const {createCipheriv,scryptSync,createDecipheriv,createHash,randomInt,randomUUID} = require('crypto');

/*
const password = 'ABCG1234';
const algorithm = 'aes-192-cbc';
const key = scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0); 
*/

let str1 = 'hello souvik';

//Encrypt
/*
const cipher = createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(str1, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
*/

//Decrypt
/*
let encryptedtxt = "acb6a895fb00a8003d32e886f37504ef";
const decipher = createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encryptedtxt, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
*/


// Create hash

/*
const hash = createHash('sha256');
hash.update(str1);
console.log(hash.digest('hex'));
*/

/*
const n = randomInt(1,7);
console.log(`The dice rolled: ${n}`);
*/

/*
console.log(randomUUID());
*/



const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex')); 

















