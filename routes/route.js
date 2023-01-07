
const express = require('express');
const router = express.Router();

//const Handler = require('../helper/handler');

// For MySql
//const EmployeeController = require('../controllers/EmployeeController');
const UsersController = require('../controllers/UsersController');

//Braintree
//const BrainTreeController = require('../controllers/BrainTreeController');

//Stripe
//const StripeController = require('../controllers/StripeController');





router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json({a:1});
  
});

/*
router.post('/add',(req, res) => {
  let a = req.body.a;
  let b = req.body.b; 
  let c = a+b;
  res.json({result:c});
  //console.log('Result : '+c);
});*/





/**
 * MySql
 * ======
 */


//router.get('/list', EmployeeController.index);
/*router.get('/add', EmployeeController.create);
router.get('/update', EmployeeController.update);
router.get('/remove', EmployeeController.remove);
router.get('/custom', EmployeeController.custom);
router.get('/custom2', EmployeeController.custom2);

*/
router.get('/details/:id', UsersController.getDetails);



/**
 * Braintree
 * =========
 */
/*
router.get('/pay', function(req, res){
  res.render('pages/index', { title: 'Express' });
});
router.get('/getauthkey', BrainTreeController.getToken);
router.post('/paynow',BrainTreeController.paynow);
*/





/**
 * Stripe
 * =========
 */
/*
router.get('/pay2', function(req, res){  
  res.render('pages/stripe');
});

router.post('/create-checkout-session', StripeController.paynow);

router.get('/success', function(req, res){  
  res.sendFile(Handler.getAbsoluteFilePath('/views/success.html'));    
});

router.get('/cancel', function(req, res){
  res.sendFile(Handler.getAbsoluteFilePath('/views/cancel.html'));  
});
*/



//FILE UPLOAD
/*
const UploadController = require('../controllers/UploadController');
const upload = UploadController.upload;
router.post('/uploadProfile',upload.single('profileimg'),UploadController.imageUpload);
*/



////







module.exports = router;
