const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    posts: '/posts',
    technologies: '/technologies'
  })
});

module.exports = router;


