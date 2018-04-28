/*
Requires
*/
const express = require('express');
const googleClient = require('./googleClient');
/*
Atributos
*/
const server = express();
const instanceGoogleClient = new googleClient();
/*
Lanzar el servidor en el puerto 3003
*/
server.listen(3003, function() {
  console.log("Server is up and listening on 3003...");
})
/*
desc: Asignar token al usuario
queryParams: N/A
req: credenciales (correo)
res: token
*/
server.post("/validation", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Identifica fotografia y devuelve toda la informacion
queryParams: N/A
req: token, imageUri
res: resultado
*/
server.post("/image", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Permite filtrar una imagen por idSolicitud
queryParams: idSolicitud
req: N/A
res: resultado
*/
server.get("/image", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Permite ver y filtrar las busquedas recientes por lotes
queryParams: token, filtros, lote
req: N/A
res: resultado
*/
server.get("/recentSearchs", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Permite ver y filtrar las busquedas populares por lotes
queryParams: filtros, lote
req: N/A
res: resultado
*/
server.get("/popularSearchs", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
/*
desc: Permite ver y filtrar los favoritos por lotes
queryParams: token, filtros, lote
req: N/A
res: resultado
*/
server.get("/favoriteSearchs", function(req, res) {
  console.log("Responding to root route");
  instanceGoogleClient.print("Task 0: Create GoogleClient --- Successful");
  res.send("Respuesta");
})
