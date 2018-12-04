const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');

const route = require('./routes');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  route(app, database);
  app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
  });
});
