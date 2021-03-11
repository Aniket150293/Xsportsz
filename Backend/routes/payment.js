const { json } = require("body-parser");
var express = require("express");
var router = express.Router();
const checksum_lib = require("./checksum/checksum.js");
const config = require("./checksum/config.js");
var connection = require("./config/index");

/* GET home page. */
router.post("/payment", function (req, res, next) {
  var params = {};
  params["MID"] = config.PaytmConfig.mid;
  params["WEBSITE"] = config.PaytmConfig.website;
  params["CHANNEL_ID"] = config.PaytmConfig.channelId;
  params["INDUSTRY_TYPE_ID"] = config.PaytmConfig.retail;
  params["ORDER_ID"] = new Date().getTime();
  params["CUST_ID"] = req.body.userid;
  params["TXN_AMOUNT"] = "1";
  params["CALLBACK_URL"] = config.PaytmConfig.callbackUrl + req.body.userid;
  params["EMAIL"] = req.body.email;
  params["MOBILE_NO"] = req.body.mobile;

  checksum_lib.genchecksum(
    params,
    config.PaytmConfig.key,
    function (err, checksum) {
      res.send({ status: 200, data: params, checksum: checksum });
    }
  );
});

router.post("/callback/:id", (req, res) => {
  var result = checksum_lib.verifychecksum(
    req.body,
    config.PaytmConfig.key,
    req.body.CHECKSUMHASH
  );
  return new Promise((resolve, reject) => {
    if (result) {
      resolve(req.body);
      var a = connection.query(
        "INSERT INTO  transaction_details " +
          "( user_id, transaction_id, bank_txn_id, order_id, amount, " +
          "status, txn_type, gateway_name, response_code, response_msg, bank_name, mid, payment_mode, " +
          "refund_amount, transaction_date ) " +
          "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ",
        [
          req.params.id,
          req.body.TXNID,
          req.body.BANKTXNID,
          req.body.ORDERID,
          req.body.TXNAMOUNT,
          req.body.STATUS,
          req.body.TXNTYPE,
          req.body.GATEWAYNAME,
          req.body.RESPCODE,
          req.body.RESPMSG,
          req.body.BANKNAME,
          req.body.MID,
          req.body.PAYMENTMODE,
          req.body.REFUNDAMT,
          req.body.TXNDATE,
        ]
      );

      if (req.body.STATUS == "TXN_SUCCESS") {
        return res.redirect(config.PaytmConfig.redirectUrlSuccess);
      } else {
        return res.redirect(config.PaytmConfig.redirectUrlFailure);
      }
    } else {
      return reject("ERROR");
    }
  });
});

module.exports = router;
