// Bring in any dependencies you'll need.
// Ex.
// const dependencies = require("library");
// -----------------------------------------------------
// const express = require('express');
const express = require('express')

const demonRouter = require('../demons/demon-router.js');

const server = express();

server.use(express.json());

server.use('/api/demons', demonRouter);

server.get('/', (req, res) => {
     res.send("Theological Demon API is Online!")
 })

module.exports = server;