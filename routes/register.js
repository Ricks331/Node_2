var express = require("express");
var router = express.Router();
var mysql = require('mysql');


/* user registration. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "Express" });
});

module.exports = router;
