const express = require('express');
const app = express();
const http = require('http').createServer(app);


http.listen(4200, () => {
    console.log("Serveur lancé sur le port: 4200")
})