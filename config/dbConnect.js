const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const dbConnect = () => {

  const MONGODB_URL = process.env.MONGODB_URL;


  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }).then(() => {
    console.log("database connection successfull ");
  }).catch((err) => {
    console.log(`error while connecting database !!! ${err}`);
  });
};

module.exports = dbConnect;
