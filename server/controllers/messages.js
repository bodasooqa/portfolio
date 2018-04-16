let db;
const ObjectID = require('mongodb').ObjectID;

module.exports.getAll = (req, res) => {
  db.collection('messages').find().toArray((err, data) => {
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
  db.collection('messages').findOne(details, (err, item) => {
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
  db.collection('messages').remove(details, (err, item) => {
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
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    text: req.body.text
  };
  db.collection('messages').update(details, note, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.json(item);
    }
  })
};

module.exports.addOne = (req, res) => {
  const note = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    text: req.body.text
  };
  db.collection('messages').insert(note, (err, result) => {
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
