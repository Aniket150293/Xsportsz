var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var connection = require("./config/index");
var nodemailer = require("nodemailer");
var config = require("./allConfig");
var uuid = require("uuid");

router.post("/validateUser", function (req, res, next) {
  var a = connection.query(
    "SELECT * from user_details where email = ? and password = ? ",
    [req.body.username, req.body.password],
    function (err, rows) {
      if (err) {
        res.send({ status: 500, data: {}, valid_user: false, error: err });
      } else {
        if (typeof rows != "undefined" && rows != "" && rows != null) {
          var token = jwt.sign(JSON.stringify(rows[0]), toString(rows[0].id));
          res.send({
            status: 200,
            data: rows[0],
            valid_user: true,
            token: token,
          });
        } else {
          res.send({ status: 500, data: {}, valid_user: false });
        }
      }
    }
  );
});

router.post("/forgetPassword", function (req, res, next) {
  connection.query(
    "SELECT TIMESTAMPDIFF(SECOND ,pudate,NOW()) as tm  from user_details where email = ? and mobile = ?",
    [req.body.email, req.body.mobile],
    function (err, rows) {
      if (err) {
        res.send({
          status: 500,
          error: err,
          data: {},
          msg: "Please provide valid Email and Password",
        });
      } else {
        console.log(rows);
        var rs = JSON.parse(JSON.stringify(rows[0]) || "{}");
        if (typeof rows != "undefined" && rows != "" && rows != null) {
          if (rs.tm >= 1800) {
            var transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 587,
              secure: false,
              requireTLS: true,
              auth: {
                user: config.allConfig.emailid,
                pass: config.allConfig.passwd,
              },
            });
            var generator = require("generate-password");

            var password = generator.generate({
              length: 8,
              numbers: true,
            });

            var mailOptions = {
              from: config.allConfig.emailid,
              to: req.body.email,
              subject: "Forgot Password Request",
              html: `<p>Hi,<br/>
                    Your New Password For XSportsz Login :  ${password} </p>`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                res.send({
                  status: 500,
                  data: {},
                  error: error,
                  msg: "Erroe While Sending Email",
                });
              } else {
                connection.query(
                  "UPDATE user_details SET password = ? , pudate=now() where email = ?",
                  [password, req.body.email],
                  function (err, rows) {
                    if (err) {
                      res.send({
                        status: 500,
                        data: {},
                        msg: "Erroe While Updating Password",
                      });
                    } else {
                      //console.log("password success");
                      res.send({
                        status: 200,
                        data: rows,
                        msg: "Password Updated Successfully",
                      });
                    }
                  }
                );
                // res.send({
                //   status: 200,
                //   data: rows,
                //   msg: "Password Changed Success",
                // });
              }
            });
          } else {
            console.log("*************88");
            console.log(rs.tm);
            res.send({
              status: 500,
              data: {},
              msg: "To get New Password wait For 30 Mins",
            });
          }
        } else {
          res.send({ status: 400, data: {}, msg: "Inavalid Information" });
        }
      }
    }
  );
});

router.post("/resetPassword", function (req, res, next) {
  if (req.body.changePassword) {
    connection.query(
      "SELECT * from user_details where id = ? ",
      [req.body.userid],
      function (err, rows) {
        if (err) res.send({ status: 500, data: {} });
        else {
          if (typeof rows != "undefined" && rows != "" && rows != null) {
            if (rows[0].password == req.body.oldpassword) {
              connection.query(
                "UPDATE user_details SET password = ? where id = ?",
                [req.body.password, req.body.userid],
                function (err, rows) {
                  if (err) res.send({ status: 500, data: {} });
                  else {
                    if (
                      typeof rows != "undefined" &&
                      rows != "" &&
                      rows != null
                    )
                      res.send({
                        status: 200,
                        data: {},
                        msg: "Password Reset Done Successfully",
                      });
                    else res.send({ status: 500, data: {} });
                  }
                }
              );
            } else res.send({ status: 500, data: {} });
          } else res.send({ status: 500, data: {} });
        }
      }
    );
  } else if (req.body.forgotPassword) {
    connection.query(
      "UPDATE user_details SET password = ? where id = ?",
      [req.body.password, req.body.userid],
      function (err, rows) {
        if (err) res.send({ status: 500, data: {} });
        else {
          if (typeof rows != "undefined" && rows != "" && rows != null)
            res.send({ status: 200, data: {} });
          else res.send({ status: 500, data: {} });
        }
      }
    );
  }
});

router.post("/checkPasswordDate", function (req, res, next) {
  connection.query("SELECT * from user_details  ", function (err, rows) {
    if (err) {
      res.send({ status: 500, data: {} });
      console.log("ERROR");
    } else {
      res.send({
        status: 200,
        data: rows,
        msg: "Get Password Changed Date Successfully",
      });
    }
  });
});

module.exports = router;
