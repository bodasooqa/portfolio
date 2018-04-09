const router = require('express').Router();
const ctrl = require('../controllers/works');

// GET ALL
router.get('/works', ctrl.getAll);
// GET ONE BY ID
router.get('/works/:id', ctrl.getOne);
// DELETE
router.delete('/works/:id', ctrl.deleteOne);
// UPDATE
router.put('/works/:id', ctrl.updateOne);
// INSERT
router.post('/works', ctrl.addOne);

module.exports = router;
