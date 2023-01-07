/* REmote DIrectory Server   REDIS  */
class RedisServer {

    redisConnect() {
        const redis = require('redis');
        const redisClient = redis.createClient('127.0.0.1', 6379);
        redisClient.connect();
        redisClient.on('error', err => {
            console.log('Error ' + err);
        });
        return redisClient;
    }

    setData(key,data,timeout=0) {
        // timeout in minutes
        let redisClient = this.redisConnect();
        redisClient.set(key, JSON.stringify(data));
        if(timeout > 0) {
            redisClient.expire(key, timeout*60);
        }
    }  

    getData(key) {
        let redisClient = this.redisConnect();
        let resp =  redisClient.get(key);        
        return resp;              
    }
 

    // HASHING   

    setHashData(parentkey,key,data) {       
        let redisClient = this.redisConnect();
        redisClient.hSet(parentkey,key,JSON.stringify(data));         
    } 

    getHashData(parentkey,key) {
        let redisClient = this.redisConnect();
        let resp =  redisClient.hGet(parentkey,key);        
        return resp;              
    }

    getALLHashData(parentkey) {
        let redisClient = this.redisConnect();
        let resp =  redisClient.hGetAll(parentkey);        
        return resp;              
    }


    //delete

    deleteData(key)
    {
        let redisClient = this.redisConnect();
        redisClient.DEL(key);
    }
}

module.exports = RedisServer;

/*
https://www.youtube.com/watch?v=YEWSxyOPyRc
*/