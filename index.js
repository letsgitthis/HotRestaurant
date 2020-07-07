const express = require('express');

const port = 3000;
const app = express();

app.listen(port, function() {
    console.log("Server is runnig on " + port +" port")
});

const reserved = []

const waiting = []

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Displays all characters
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });