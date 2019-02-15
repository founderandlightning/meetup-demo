const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Code reviewee tool"
  });
});

module.exports = router;
