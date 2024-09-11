'use strict';

var express = require('express');

var app = express();
var { Server } = require('http');

var server = new Server(app);
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

server.listen(8080);

// __dirname is used here along with package.json.pkg.assets
// see https://github.com/zeit/pkg#config and
// https://github.com/zeit/pkg#snapshot-filesystem
app.use('/', express.static(`${__dirname}/views`));

app.get('/log-prisma', async (req, res) => {
  console.log(prisma);

  res.type('text/plain');
  return res.send('Hello World!');
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
