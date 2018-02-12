let db;
const mainData = {
  posts: [],
  technologies: []
};

module.exports.getAll = (req, res) => {
  db.collection('posts').find().toArray((err, data) => {
    if (err) {
      res.send({ 'error': 'An error has occured' });
    } else {
      data.forEach((item) => {
        mainData.posts.push(item);
      });
      res.json(mainData);
    }
  });
};


module.exports.getDb = (database) => {
  db = database;
  module.exports.db = db;
};
