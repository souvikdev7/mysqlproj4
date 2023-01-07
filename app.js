const express = require("express");
const app = express();
const PORT =  4000;
const router = require('./routes/route');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));




/**
 *  Express Interceptor
 */
//========================================================//
/*
let interceptor = require('express-interceptor');
let mainIntercept = interceptor(function(req, res) {
    return {    
      isInterceptable: function(){
        console.log("IsInterceptable");
        return true;  // false
      },    
      intercept: function(body, send) {
        // deals with response body
        console.log("Intercept ===> "+body);          
        send(body);
      },
      afterSend: function(oldBody, newBody) {
        // deals with response body
        console.log("After send");      
        //console.log(oldBody);      
        //console.log(newBody);      
      },
    };
  })
app.use(mainIntercept); 
*/
//========================================================//


app.use('/',router);



/**
 * For GraphQL
 */
//========================================================//
/*const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/index');

// This is used to send data
let attach = {"ip":"192.168.5.1","key":"yeyfe1354nbfl"};

// This is used to do some validatations or to header key authentication purpose
const myfn1 = async (req) => {
    return{header:req.headers.host,token:"T2424NGJH"};
}*/


/*
app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: attach,  
    graphiql: true    
}));
*/
/*
app.use('/graphql', graphqlHTTP(async req =>({
    schema: schema, 
    rootValue: attach,  
    graphiql: true,
    context : ()=> myfn1(req)   
})));*/
//========================================================//



/////////////////////////////////////////////////

// Page Not Found
app.use(function(req, res) {
    res.status(404).send("Sorry Page Not Found");
});

app.listen(PORT,()=>{   
    console.log(`Server running on port ${PORT}`);
}); 


//////////
