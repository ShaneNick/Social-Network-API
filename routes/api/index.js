const router = require('express').Router();

// Import all the routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use the imported routes
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;
