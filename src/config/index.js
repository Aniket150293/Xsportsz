const MODE = 1; // 1 - Local, 2 - Production
let url = "http://localhost:3000/";
let paymentUrl = "https://securegw-stage.paytm.in/order/process";

if (MODE == 2) {
  url = "https://xsportsz-backend.el.r.appspot.com/";
  paymentUrl = "https://securegw.paytm.in/order/process";
}

export { url, paymentUrl };
