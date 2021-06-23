require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = require("./app/common/config");
const router = require("./app/router/index.router");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
