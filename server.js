const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var dbconnection = require("./db");
var productsRoute = require("./routes/productRoute");
var userRoute = require("./routes/userRoute");
var orderRoute = require("./routes/orderRoute");
app.use(bodyParser.json());
const path = require("path");
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);
//in the production environment
if (process.env.NODE_ENV === "production") {
  //first tell the compiler what is the static point
  app.use(express.static("shopAKM-client/build"));
  //in the static folder what is the static point-index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("nodejs server started"));
