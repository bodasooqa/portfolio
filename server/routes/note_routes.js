var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  // GET ALL
  app.get('/notes', (req, res) => {
    db.collection('notes').find().toArray((err, data) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.json(data);
      }
    })
  });
  // GET ONE BY ID
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(item);
      }
    })
  });
  // DELETE
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(`Note ${id} deleted`);
      }
    })
  });
  // UPDATE
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id) };
    const note = { text: req.body.body };
    db.collection('notes').update(details, note, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(item);
      }
    })
  });
  // INSERT
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
