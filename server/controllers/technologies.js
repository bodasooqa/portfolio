let db;
const ObjectID = require('mongodb').ObjectID;

module.exports.getAll = (req, res) => {
  db.collection('technologies').find().toArray((err, data) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.json(data);
    }
  })
};

module.exports.getOne = (req, res) => {
  const id = req.params.id;
  const details = {'_id': new ObjectID(id) };
  db.collection('technologies').findOne(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.json(item);
    }
  })
};

module.exports.deleteOne = (req, res) => {
  const id = req.params.id;
  const details = {'_id': new ObjectID(id) };
  db.collection('technologies').remove(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.send(`Note ${id} deleted`);
    }
  })
};

module.exports.updateOne = (req, res) => {
  const id = req.params.id;
  const details = {'_id': new ObjectID(id) };
  const note = {
    name: req.body.name
  };
  db.collection('technologies').update(details, note, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.json(item);
    }
  })
};

module.exports.addOne = (req, res) => {
  const note = {
    name: req.body.name
  };
  db.collection('technologies').insert(note, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.json(result.ops[0]);
    }
  });
};

module.exports.getDb = (database) => {
  db = database;
  module.exports.db = db;
};
