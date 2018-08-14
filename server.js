// require dependencies
var express = require("express");
var exphbs = require("express-handlebars");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cheerio = require("cheerio");
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
// var request = require("request");
// request("http://www.google.com", function(error, response, body) {
//   console.log("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

// set up our port to be either host's designsted port or 3000
var PORT = process.env.PORT || 3000;

// instantiate our express app
var app = express();

// set up an express router
var router = express.Router();

// require our routes file pass our router object
require("./config/routes")(router);

// designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// connect handlebars to our express app
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// use bodyParser in our app
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// have every request go through our router middleware
app.use(router);

// if deployed, use the deployed database otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// connect mongoose to our database
mongoose.connect(
  db,
  function(error) {
    // log any errors connecting with mongoose
    if (error) {
      console.log(error);
    }
    // or log success message
    else {
      console.log("mongoose connection is successful");
    }
  }
);

// listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});

mongoose.connect("mongodb://localhost/my_database");
