const shortid = require("shortid");
const express = require("express");
const { URL } = require("../models/url");

async function handleGenerateNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "no url found" });
  const shortId = shortid();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

async function getUserAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    numberOfv: result.vistHistory.length,
    analytics: result.vistHistory,
  });
}

module.exports = {
  handleGenerateNewUrl,
  getUserAnalytics,
};
