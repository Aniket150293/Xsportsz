const MODE = 1; // 1- Local, 2 - Production

let MID = "ZFzFwZ97111995383926";
let KEY = "7UQvAdG0QiYfK6EU";
let WEBSITE = "WEBSTAGING";
let CHANNELID = "WEB";
let RETAIL = "Retail";
let CALLBACKURL = "http://localhost:3000/payment/callback/";
let SUCCESSURL = "http://localhost:8080/#/payment/200";
let FAILUREURL = "http://localhost:8080/#/payment/500";

if (MODE == 2) {
  MID = "VcIqMo00127550993107";
  KEY = "CHVvMSdQkOiUgBn7";
  WEBSITE = "DEFAULT";
  CHANNELID = "WEB";
  RETAIL = "Retail";
  CALLBACKURL = "https://xsportsz-backend.el.r.appspot.com/payment/callback/";
  SUCCESSURL = "https://xsportsz.el.r.appspot.com/#/payment/200";
  FAILUREURL = "https://xsportsz.el.r.appspot.com/#/payment/500";
}

var PaytmConfig = {
  mid: MID,
  key: KEY,
  website: WEBSITE,
  channelId: CHANNELID,
  retail: RETAIL,
  callbackUrl: CALLBACKURL,
  redirectUrlSuccess: SUCCESSURL,
  redirectUrlFailure: FAILUREURL,
};

console.log("---------------");
console.log(PaytmConfig);
module.exports.PaytmConfig = PaytmConfig;
