const express = require('express');
const googleClient = require('./googleClient');

const server = express();
const instanceGoogleClient = new googleClient();

server.listen(3003, function() {
  console.log("Server is up and listening on 3003...");
})
/*
desc: Asignar token al usuario
params:
req{
credenciales (correo)
},
res{
token de usuario
}
*/
server.post("/validation", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Identifica la fotografia y devuelve la informacion de los productos
params:
req{
url de la imagen, token
},
res{
respuesta en JSON, id de solicitud
}
*/
server.post("/order", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Devuelve todas las busquedas del usuario
params:
req{
url de la imagen, token
},
res{
respuesta en JSON, id de solicitud
}
*/
server.get("/order", function(req, res) {
  /*req.query.categoria
  req.query.safeSearch
  req.query.score
  req.query.color
  req.query.shops*/
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Filtra un resultado
params:
req{
url de la imagen, token
},
res{
respuesta en JSON
}
*/
server.get("/order/:order",
function(req, res) {
  /*req.query.categoria
  req.query.safeSearch
  req.query.score
  req.query.color
  req.query.shops*/
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send();
})
/*
desc: Identifica la fotografia y devuelve la informacion de los productos
params:
req{
credenciales
}
res{
respuesta en JSON, id de solicitud
}
*/
server.get("/recentsearch?token=", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
