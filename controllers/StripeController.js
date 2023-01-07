

const publicKey = 'pk_test_51MASstSFRsRkf8iJw1xw64nC3PhYYlpBxogs9hv0Oty5aDndKslmXFp3UMf63yoYeUEHhx1rHfHAmey2jzksZ34Y00rGGDDl6j'
const secretKey = 'sk_test_51MASstSFRsRkf8iJCCTVDd1mOVP8i5oWaS5Us2JGOWOjFIX2LcQaVZwNlWilIPSH2WEpFgmjNpjavvfcKi5jVq9200t8X0bWcR'
 
const stripe = require('stripe')(secretKey);
const getPubKey = () => { return publicKey};

const DOMAIN = 'http://localhost:3000';


const paynow = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {           
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            //price: '{{PRICE_ID}}',             
            price: "price_1MAUhASFRsRkf8iJjBBz0Xt4", 
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${DOMAIN}/success`,
        cancel_url: `${DOMAIN}/cancel`,
      });
    
      res.redirect(303, session.url);

}



module.exports = {getPubKey,paynow};

/*
https://stripe.com/docs/checkout/quickstart
https://stripe.com/docs/products-prices/pricing-models

*/