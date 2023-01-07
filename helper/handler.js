//const jwt = require('jsonwebtoken');
const SECRET = 'bGEyYWF2dnQ1Zm5ncWp0ZmZxcQ==';
//const bcrypt = require('bcrypt');
//const process = require('process');
//const crypto = require('crypto');
const path = require("path");




const getPreviousDate = function (diff) {    
    let date = new Date();
    let newDate = new Date(date.setMonth(date.getMonth()-diff));
    return newDate;
}

const createUID = () => {
    let head = Date.now().toString(36);
    let tail  = Math.random().toString(36).substring(2);
    let full  = head+tail;
    const plain = Buffer.from(full, 'utf8').toString('base64');
    return plain;
}

const createNewUUID = () => {    
    //return crypto.randomUUID();
}


const createToken = (id,name) => {    
    /*let token = jwt.sign(
    { id: id, name : name}, 
    SECRET, 
    { algorithm:'HS384',expiresIn:'1h'}
    );
    return token;*/
}


const getAbsoluteFilePath = function (p) {    
    // path.join(__dirname, '..','..','foo.txt'); // 2 previous folders =>  '..','..',
    //p can be like '/views/abc.html'

    return path.join(__dirname, '..', p);
}


module.exports = {getPreviousDate,createUID,createToken,getAbsoluteFilePath};