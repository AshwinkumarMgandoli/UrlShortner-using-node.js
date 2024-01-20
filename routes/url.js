const express = require("express");
const {
  handleGenerateNewUrl,
  getUserAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewUrl);

router.get("/analytics/:shortId", getUserAnalytics);

module.exports = router;
