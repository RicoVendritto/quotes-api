const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");

const speakerRouter = require("./routes/speakerRouter.js");
// const quoteRouter = require("./routes/quoteRouter");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/speakers", speakerRouter);
// app.use("/quotes", quoteRouter);

app.listen(PORT, () => {
  console.log(`We're up and going at ${PORT} `);
});
