var express = require("express");
var router = express.Router();
var uuid = require("uuid");
var jwt = require("jsonwebtoken");
var connection = require("./config/index");

router.post("/getMysport", (req, res, next) => {
  jwt.verify(
    req.headers["authorization"],
    toString(req.body.userid),
    function (err, data) {
      if (err) {
        res.send({ status: 403, msg: "Forbidden" });
      } else {
        var a = connection.query(
          `SELECT sports_master.name, specialization_master.name as sname, DATE_FORMAT(user_sport_mapping.created_date,'%d-%m-%y') as cddate  FROM ((specialization_master INNER JOIN user_sport_mapping ON specialization_master.id=user_sport_mapping.specialization_id) INNER JOIN sports_master ON specialization_master.sport_id = sports_master.id) WHERE user_id=?`,
          [req.body.userid],
          function (err, rows) {
            if (err) {
              res.send({ status: 500, data: {} });
            } else {
              res.send({
                status: 200,
                data: rows,
                msg: "getMysport Successfully",
              });
            }
          }
        );
      }
    }
  );
});

router.post("/getSports", (req, res, next) => {
  jwt.verify(
    req.headers["authorization"],
    toString(req.body.userid),
    function (err, data) {
      if (err) {
        res.send({ status: 403, msg: "Forbidden" });
      } else {
        connection.query("SELECT * FROM sports_master", function (err, rows) {
          if (err) {
            res.send({ status: 500, data: {} });
          } else {
            res.send({
              status: 200,
              data: rows,
              msg: "Get Sport Successfully",
            });
          }
        });
      }
    }
  );
});

router.post("/getRole", (req, res, next) => {
  jwt.verify(
    req.headers["authorization"],
    toString(req.body.userid),
    function (err, data) {
      if (err) {
        res.send({ status: 403, msg: "forbidden" });
      } else {
        connection.query("SELECT * FROM role_master", function (err, rows) {
          if (err) {
            res.send({ status: 500, data: {} });
          } else {
            res.send({ status: 200, data: rows, msg: "getRole successfully" });
          }
        });
      }
    }
  );
});

router.post("/getSpetialization", (req, res, next) => {
  jwt.verify(
    req.headers["authorization"],
    toString(req.body.userid),
    function (err, data) {
      if (err) {
        res.send({ status: 403, msg: "Forbidden" });
      } else {
        if (req.body.sport_id) {
          connection.query(
            "SELECT * FROM specialization_master where sport_id = ?",
            [req.body.sport_id],
            function (err, rows) {
              if (err) {
                res.send({ status: 500, data: {} });
              } else {
                res.send({
                  status: 200,
                  data: rows,
                  msg: "Get Specialization Successfully",
                });
              }
            }
          );
        } else {
          connection.query(
            "SELECT * FROM specialization_master",
            function (err, rows) {
              if (err) {
                res.send({ status: 500, data: {} });
              } else {
                res.send({
                  status: 200,
                  data: rows,
                  msg: "Get Specialization Successfully",
                });
              }
            }
          );
        }
      }
    }
  );
});

module.exports = router;
