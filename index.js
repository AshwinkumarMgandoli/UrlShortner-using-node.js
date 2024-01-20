const express = require("express");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;
const { URL } = require("./models/url");
const { connectToDb } = require("./connect");

connectToDb("mongodb://127.0.0.1:27017/url").then(() =>
  console.log("Connected to db")
);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        vistHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectUrl);
});

app.use(express.json());
app.use("/url", urlRoute);
app.listen(PORT, () => console.log(`lisetning on port : ${PORT}`));
