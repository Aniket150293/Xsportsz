var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var connection = require("./config/index");
var uuid = require("uuid");

router.post("/registerSportDetails", function (req, res, next) {
  jwt.verify(
    req.headers["authorization"],
    toString(req.body.userid),
    function (err, data) {
      if (err) {
        res.send({ status: 403, msg: "Forbidden" });
      } else {
        var a = connection.query(
          "INSERT INTO user_sport_mapping " +
            "( user_id, sport_id, years_age, months_age, specialization_id, " +
            "gender, weight, height, blood_group, education, " +
            "experience, disability, disability_details, achievement, level_palyed_on, account_no, ifsc, " +
            "future_plan, category,is_active, created_date, updated_date)" +
            "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1,now(),now()) ",
          [
            req.body.userid,
            req.body.sport,
            req.body.years,
            req.body.months,
            req.body.spetialization,
            req.body.gender,
            req.body.weight,
            req.body.height,
            req.body.bloodGroup,
            req.body.education,
            req.body.experience,
            req.body.disability,
            req.body.disabilityDetails,
            req.body.achievement,
            req.body.levelPlayedOn,
            req.body.accountNo,
            req.body.ifsc,
            req.body.futurePlan,
            req.body.category,
            req.body.clubName,
            req.body.familyDetails,
          ],
          function (err, rows) {
            if (err) {
              console.log("--------------");
              console.log(a.sql);
              console.log("!!!!!!!!!!!11");
              console.log(err);
              res.send({ status: 500, data: err });
            } else {
              res.send({ status: 200, msg: "User Registered Successfully" });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
