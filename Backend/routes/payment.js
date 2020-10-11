var express = require('express');
var router = express.Router();
const checksum_lib = require('./checksum/checksum.js');
const config = require('./checksum/config.js');

/* GET home page. */
router.post('/payment', function(req, res, next) {
    
  var params 						= {};
  params['MID'] 					= "dYCLtv04241463291282";
  params['WEBSITE']				= "WEBSTAGING";
  params['CHANNEL_ID']			= 'WEB';
  params['INDUSTRY_TYPE_ID']	= 'Retail';
  params['ORDER_ID']			= 'TEST_'  + new Date().getTime();
  params['CUST_ID'] 			= 'Customer001';
  params['TXN_AMOUNT']			= '1.00';
  params['CALLBACK_URL']		= 'http://localhost:3000/callback/callback';
  params['EMAIL']				= 'abc@mailinator.com';
  params['MOBILE_NO']			= '7777777777';

  checksum_lib.genchecksum(params, 'C7UK7o1je%fRZXSE', function (err, checksum) {
    res.send({status:200,data:params, checksum:checksum});
  });
});

module.exports = router;
