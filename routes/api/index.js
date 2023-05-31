const router = require('express').Router();

// Import all the routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use the imported routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
