var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var connection = require('./config/index');
var uuid = require('uuid');


router.post('/registerBankByAdmin', function(req, res, next) {
          jwt.verify(req.headers['authorization'],toString(req.body.userid),function(err,data){
            if(err){
              res.send({status:403 , msg: 'Forbidden'});
            }else{
              var a = connection.query('INSERT INTO registered_bank '+
              '( bank_registration_applied_by, bank, email, phone_number, alternate_phone_number, ' +
              'location, accounts_starts_with, ifsc, city, state, zip_code, is_active, is_blocked, '+
              'created_at,modified_at ) '+
              'VALUES (?,?,?,?,?,?,?,?,?,?,?,1,0,now(),now()) ',

              [req.body.userid, req.body.bankName, req.body.email,
                req.body.phoneNo, req.body.alternatePhoneNo, req.body.location , req.body.accountStartWith,
                req.body.ifsc,req.body.city, req.body.state, req.body.zip],
              function (err, rows) {
                if(err){
                  res.send({status:500 , data:err});
                }else{
                  res.send({status:200 , data: rows, msg: 'Bank Registered Successfully'});
                }
              })
            }
          })
});



module.exports = router;
