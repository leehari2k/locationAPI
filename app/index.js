require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = require("./common/config");
const router = require("./router/index.router");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
