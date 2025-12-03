const express = require('express');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const router = express.Router();

// Admin only
router.get('/admin/dashboard', verifyToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin', user: req.user });
});

// Client only
router.get('/client/rentals', verifyToken, authorizeRole('client'), (req, res) => {
  res.json({ message: 'Client rentals', user: req.user });
});

// Supplier only
router.get('/supplier/inventory', verifyToken, authorizeRole('supplier'), (req, res) => {
  res.json({ message: 'Supplier inventory', user: req.user });
});

module.exports = router;