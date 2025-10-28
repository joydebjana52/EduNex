const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Get token from the Authorization header (Bearer <token>)
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token part
    if (!token) {
      return res.status(401).json({ message: 'Access denied. Invalid token format.' });
    }

    // Verify the token using your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

    // Store decoded user info in request for later use
    req.user = decoded;

    next(); // move to next middleware or controller
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
