const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
require("./config/db");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  var utc = new Date()
    .toJSON()
    .replace(/-/g, "/")
    .replace("T", " ")
    .replace("Z", "");

  console.log(
    `TIME : ${utc} | Request type : ${req.method} | Request URL : ${req.url}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

const userInformationRoute = require("./routes/userInformationRoute");
app.use("/api/user-information", userInformationRoute);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
