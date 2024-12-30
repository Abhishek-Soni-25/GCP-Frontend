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

// Serve static files from the "media" directory
app.use('/media', express.static(path.join(__dirname, 'media')));

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




// Production Server Code is below and only work for production only


// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const apiRoutes = require('./routes/api'); // Import API routes
// const app = express();

// // Set the port to the default HTTP port (80) or the one assigned by the hosting environment
// const port = process.env.PORT || 80;

// // Enable CORS
// app.use(cors());

// // Middleware for parsing JSON
// app.use(express.json());

// // Use API routes (e.g., /api)
// app.use('/api', apiRoutes);

// // Serve the Vue.js app from the "dist" folder
// app.use(express.static(path.join(__dirname, 'dist')));

// // Catch-all route to handle frontend routing and serve index.html
// app.get('*', (req, res) => {
//   // Ensure non-API requests serve the Vue.js app
//   if (!req.originalUrl.startsWith('/api')) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   } else {
//     res.status(404).send({ error: 'API route not found.' });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running at https://gcp.agratasinfotech.com`);
// });
