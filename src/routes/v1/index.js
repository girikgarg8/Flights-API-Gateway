const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const { InfoController } = require('../../controllers/index');

router.get('/info', InfoController.info);
router.use('/users', userRoutes);

module.exports = router;