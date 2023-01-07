const braintree = require("braintree");
const Logger = require('../helper/logger');

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "3978w7fhr975g89z",
  publicKey: "2dnsk52cg3rg3tbs",
  privateKey: "513fba073065f61885cbb01b5ea59f28"
});

gateway.config.timeout = 10000;



/**
 * Creating clientToken & pass this to your front-end
 */
const getToken = async (req, res) => {
    try {              
        gateway.clientToken.generate({}, (err, response) => {     
            if(err) {
                console.log(err);
                res.json(err);
            } else {
                let clientToken = response.clientToken;          
                res.json({"authkey":clientToken});
            }            
        });        
    } 
    catch (err) {
        console.log(err);
    }
}


const paynow = async (req, res) => {
    try {        
        let posted = req.body;
        //console.log(posted);
        //console.log(posted.nonceFromTheClient);

        let nonceFromTheClient = posted.nonceFromTheClient;
        
        gateway.transaction.sale({
            amount: "1.00",
            paymentMethodNonce: nonceFromTheClient,            
            options: {
              submitForSettlement: true
            }
          }, (err, result) => {
            if(err) {
                console.log(err);
                res.json(err);
            } else {
                Logger.write(result);                
                /*if (result.success) {
                    
                    result.transaction.id
                    result.transaction.status
                    result.transaction.processorResponseCode
                    result.transaction.processorResponseText
                    result.transaction.processorResponseType


                }*/
                
            }

          }
        );
    
        res.json({});        
    } 
    catch (err) {
        console.log(err);
    }
}

module.exports = {getToken,paynow};





/*
https://developer.paypal.com/braintree/docs/reference/request/transaction/adjust-authorization

*/