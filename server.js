const express = require('express');

const actionRouter = require('./data/routers/actionRouter');
const projectRouter = require('./data/routers/projectRouter');

const server = express();

server.use(express.json());
server.use(logger);
server.use('/actions', actionRouter);
server.use('/projects', projectRouter);

const port = 4000;

server.get('/', (req, res) => {
  res.send(`<h2>Testing API on port: ${port}</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

server.use(logger);

module.exports = server;