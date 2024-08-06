const mongoose = require("mongoose");

const mongoUserName = process.env.MONGO_USER_NAME;
const mongoUserPassword = process.env.MONGO_USER_PASSWORD;

const MONGO_URI = `mongodb+srv://${mongoUserName}:${mongoUserPassword}@cluster0.bgighkr.mongodb.net/`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
