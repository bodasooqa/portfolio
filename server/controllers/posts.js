let db;
const ObjectID = require('mongodb').ObjectID;

module.exports.getAll = (req, res) => {
  db.collection('posts').find().toArray((err, data) => {
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
  db.collection('posts').findOne(details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.send(item);
    }
  })
};

module.exports.deleteOne = (req, res) => {
  const id = req.params.id;
  const details = {'_id': new ObjectID(id) };
  db.collection('posts').remove(details, (err, item) => {
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
    title: req.body.title,
    description: req.body.description,
    desc: req.body.desc,
    img: req.body.img,
    date: new Date()
  };
  db.collection('posts').update(details, note, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.send(item);
    }
  })
};

module.exports.addOne = (req, res) => {
  const note = {
    title: req.body.title,
    description: req.body.description,
    desc: req.body.desc,
    img: req.body.img,
    date: new Date()
  };
  db.collection('posts').insert(note, (err, result) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      res.send(result.ops[0]);
    }
  });
};

module.exports.getDb = (database) => {
  db = database;
  module.exports.db = db;
};
