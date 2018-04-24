const express = require('express');
const googleClient = require('./googleClient');

const server = express();
const instanceGoogleClient = new googleClient();

server.get("/", function (req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Hello from Root!");
})

server.listen(3003, function () {
  console.log("Server is up and listening on 3003...");
})
