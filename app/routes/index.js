const express = require("express");

const router = express.Router();
const { getTitle } = require("../application/index");

router.get("/", (req, res) => {
  res.render("index", {
    title: getTitle()
  });
});

module.exports = router;
