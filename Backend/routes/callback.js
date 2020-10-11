var express = require('express');
var router = express.Router();
const checksum_lib = require('./checksum/checksum.js');
const config = require('./checksum/config.js');
var https = require('https');


router.post('/callback', (req, res) => {
    console.log('!!!!!!!!!!!!!!!!!')
    var body = '';
    // req.on('data', function (data) {
    //     body += data;
    // });
//    req.on('end', function () {
     var html = "";
     var post_data = req.body;

     // received params in callback
     console.log('Callback Response: ', post_data, "\n");


     // verify the checksum
     var checksumhash = post_data.CHECKSUMHASH;
     // delete post_data.CHECKSUMHASH;
     var result = checksum_lib.verifychecksum(post_data, config.PaytmConfig.key, checksumhash);
     console.log("Checksum Result => ", result, "\n");


     // Send Server-to-Server request to verify Order Status
     var params = {"MID": config.PaytmConfig.mid, "ORDERID": post_data.ORDERID};

     checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
        console.log('0000000000000')

       params.CHECKSUMHASH = checksum;
       post_data = 'JsonData='+JSON.stringify(params);

       var options = {
         hostname: 'securegw-stage.paytm.in', // for staging
         // hostname: 'securegw.paytm.in', // for production
         port: 443,
         path: '/merchant-status/getTxnStatus',
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
           'Content-Length': post_data.length
         }
       };


       // Set up the request
       var response = "";
       var post_req = https.request(options, function(post_res) {
         post_res.on('data', function (chunk) {
             console.log('1111111111111111')
           response += chunk;
         });
         console.log('333333333333')
         post_res.on('end', function(){
           
           console.log('S2S Response: ', response, "\n");

           var _result = JSON.parse(response);
             if(_result.STATUS == 'TXN_SUCCESS') {
                 res.send({status:200,data:_result, msg:'Successful Transaction'})
             }else {
                 res.send({status:500,data:_result, checksum:'Failure'})
             }
           });
       });

        //post the data
        post_req.write(post_data);
            post_req.end();
        });
     //});
})
module.exports = router;
