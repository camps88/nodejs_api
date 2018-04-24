const express = require('express');
const googleClient = require('./googleClient');

const server = express();
const instanceGoogleClient = new googleClient();

server.get("/", (req, res) => {
  console.log("Responding to root route");
  instanceGoogleClient.print("pepe");
  res.send("Hello from Rooooot!");
})

server.listen(3003, () => {
  console.log("Server is up and listening on 3003...");
})
