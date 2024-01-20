const mongoose = require("mongoose");
const express = require("express");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: "string",
      required: true,
      unique: true,
    },

    redirectUrl: {
      type: "string",
      required: true,
    },

    vistHistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = {
  URL,
};
