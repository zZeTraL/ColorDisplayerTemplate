const express = require('express');
const path = require("path");
const app = express();
const http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, "..")));

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "views", "home", "index.html"));
})

http.listen(4200, () => {
    console.log("Serveur lancé sur le port: 4200")
})