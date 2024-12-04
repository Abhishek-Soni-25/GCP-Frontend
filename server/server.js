const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import API routes
const app = express();
const port = process.env.PORT || 7000;

// Enable CORS
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Use API routes (like /api)
app.use('/api', apiRoutes);

// Root route
app.get('/', (req, res) => {
  const baseUrl = req.protocol + "://" + req.get("host");
  res.json(
    {
      'message':`${baseUrl}/api/message`,
      'contactus':`${baseUrl}/api/contactus`,
      'faq':`${baseUrl}/api/submit-faq`
    }
  )
});

// Initializes database existence.
initializeDatabase()
  .then((sequelize) => {
    console.log("App is ready to use the database.");
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
  });

// Serve the built Vue.js app
if (process.env.NODE_ENV === 'production') {
  // Set static folder to serve the Vue.js build
  app.use(express.static(path.join(__dirname, 'dist')));

  // Catch-all route for handling all frontend routes by serving index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});