// server/server.js

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import API routes
const app = express();
const port = process.env.PORT || 7000;

// Enable CORS
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Use API routes
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
