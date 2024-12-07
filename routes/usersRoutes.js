const express = require('express');
const { authenticateToken, authorizeRoles } = require('../middlewares/auth');
const { User } = require('../models/user');

const router = express.Router();

/**
 * GET /users
 * Only accessible by admin role.
 */
router.get('/', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error });
  }
});

/**
 * GET /profile
 * Accessible by all authenticated users.
 */
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error });
  }
});

module.exports = router;
