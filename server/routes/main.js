const router = require('express').Router();
const ctrl = require('../controllers/main');

// GET ALL
router.get('/', ctrl.getAll);

module.exports = router;


