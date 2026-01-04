const express = require('express');
const { verifyToken, authorizeRole } = require('../middleware/auth');
const { getCustomers, normalizeCustomers } = require('../services/hirepose');
const router = express.Router();

// Admin only
router.get('/admin/dashboard', verifyToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin', user: req.user });
});

// Admin: fetch all customers from HirePose
router.get('/admin/customers', verifyToken, authorizeRole('admin'), async (req, res) => {
  try {
    const { customers, raw } = await getCustomers();
    res.json({ customers: normalizeCustomers(customers), raw });
  } catch (error) {
    console.error('HirePose customers fetch error:', error?.response?.data || error.message);
    const status = error?.response?.status || 500;
    const message =
      error?.response?.data?.message ||
      (error.code === 'HIREPOSE_CONFIG_MISSING' ? 'HirePose credentials missing' : 'Failed to fetch customers');

    // Surface raw details to help diagnose (e.g., HirePose error payload or stack)
    res.status(status).json({
      message,
      details: error?.response?.data || error?.details || null,
    });
  }
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
