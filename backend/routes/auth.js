import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, userType, phone, address } = req.body;

    // Validate required fields
    if (!name || !email || !password || !userType) {
      return res.status(400).json({ message: 'Name, email, password and userType are required' });
    }

    // Validate userType
    if (!['admin', 'client', 'supplier'].includes(userType)) {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      userType,
      phone,
      address,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register error:', error);
    // Mongoose validation error
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).reduce((acc, key) => {
        acc[key] = error.errors[key].message;
        return acc;
      }, {});
      return res.status(400).json({ message: 'Validation failed', errors });
    }
    // Duplicate key (e.g., unique email)
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    // Generic fallback
    res.status(500).json({ message: 'Internal server error' });
  }
});

const redirectUrls = {
  admin: '/admin/dashboard',
  supplier: '/supplier/dashboard',
  client: '/client/dashboard',
};

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password, userType: requestedUserType } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If frontend sends an expected role, enforce it to prevent cross-portal logins
    if (requestedUserType && requestedUserType !== user.userType) {
      return res.status(403).json({
        message: `This account is registered as ${user.userType}. Use the correct portal to log in.`,
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      redirectUrl: redirectUrls[user.userType],
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Return the logged-in user's profile using the JWT (useful for client-side redirects)
router.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
      },
      redirectUrl: redirectUrls[user.userType],
    });
  } catch (error) {
    console.error('Profile lookup error:', error);
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
