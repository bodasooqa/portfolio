const router = require('express').Router();
const ctrl = require('../controllers/technologies');

// GET ALL
router.get('/technologies', ctrl.getAll);
// GET ONE BY ID
router.get('/technologies/:id', ctrl.getOne);
// DELETE
router.delete('/technologies/:id', ctrl.deleteOne);
// UPDATE
router.put('/technologies/:id', ctrl.updateOne);
// INSERT
router.post('/technologies', ctrl.addOne);

module.exports = router;


