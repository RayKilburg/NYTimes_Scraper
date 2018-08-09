var express = require('express');
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
 
 
var app = express();

app.listen(3000)

mongoose.connect('mongodb://localhost/my_database');
