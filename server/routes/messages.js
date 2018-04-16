const router = require('express').Router();
const ctrl = require('../controllers/messages');

// GET ALL
router.get('/messages', ctrl.getAll);
// GET ONE BY ID
router.get('/messages/:id', ctrl.getOne);
// DELETE
router.delete('/messages/:id', ctrl.deleteOne);
// UPDATE
router.put('/messages/:id', ctrl.updateOne);
// INSERT
router.post('/messages', ctrl.addOne);

module.exports = router;


