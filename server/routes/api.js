// server/routes/api.js

const express = require('express');
const router = express.Router();

// Define a sample API route
router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the API route!' });
});

module.exports = router;
