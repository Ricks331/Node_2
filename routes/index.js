var express = require("express");
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res) {
  console.log(req.body);

  console.log("hai");
});

module.exports = router;
