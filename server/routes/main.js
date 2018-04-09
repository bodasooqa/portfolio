const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    posts: '/posts',
    works: '/works',
    technologies: '/technologies',
  })
});

module.exports = router;


