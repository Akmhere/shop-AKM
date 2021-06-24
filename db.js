const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://teamakm:teamakm123@cluster0.zl5fn.mongodb.net/mern-ecommerce";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => console.log("MongoDB connection failed"));
dbconnect.on("connected", () => console.log("MongoDB connection success"));

module.exports = mongoose;
