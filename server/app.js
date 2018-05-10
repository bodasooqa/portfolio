const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db');

const route = require('./routes');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  route(app, database);
  app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
  });
});
