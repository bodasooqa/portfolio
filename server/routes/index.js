const postsRoutes = require('./posts');
const technologiesRoutes = require('./technologies');
const worksRoutes = require('./works');
const mainRoutes = require('./main');
const getPosts = require('../controllers/posts').getDb;
const getTechnologies = require('../controllers/technologies').getDb;
const getWorks = require('../controllers/works').getDb;

module.exports = (app, db) => {
  getPosts(db);
  getTechnologies(db);
  getWorks(db);
  app.use('/api', mainRoutes);
  app.use('/api', postsRoutes);
  app.use('/api', technologiesRoutes);
  app.use('/api', worksRoutes)
};

