const postsRoutes = require('./posts');
const technologiesRoutes = require('./technologies');
const mainRoutes = require('./main');
const getPosts = require('../controllers/posts').getDb;
const getTechnologies = require('../controllers/technologies').getDb;

module.exports = (app, db) => {
  getPosts(db);
  getTechnologies(db);
  app.use('/api', mainRoutes);
  app.use('/api', postsRoutes);
  app.use('/api', technologiesRoutes);
};

