const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const dbConnect = () => {

  const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://hrirbno:OcfOgUqm3dxbWuca@cluster0.mongodb.net/TaskManager?retryWrites=true&w=majority";


  mongoose.connect("mongodb+srv://hrirbno:OcfOgUqm3dxbWuca@cluster0.cybsp6u.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }).then(() => {
    console.log("database connection successfull !!!");
  }).catch((err) => {
    console.log(`error while connecting database ${err}`);
  });
};

module.exports = dbConnect;
