const router = require('express').Router();
const ctrl = require('../controllers/posts');

// GET ALL
router.get('/posts', ctrl.getAll);
// GET ONE BY ID
router.get('/posts/:id', ctrl.getOne);
// DELETE
router.delete('/posts/:id', ctrl.deleteOne);
// UPDATE
router.put('/posts/:id', ctrl.updateOne);
// INSERT
router.post('/posts', ctrl.addOne);

module.exports = router;


