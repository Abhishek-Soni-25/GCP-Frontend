// server/routes/api.js

const express = require('express');
const router = express.Router(); 

// Importing the models 
const FAQ = require("../models/faq.models");

// Define a sample API route
router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the API route!' }); 
});

// Define the POST route to submit a new FAQ
router.post("/submit-faq", async (req, res) => {
  const { query } = req.body;

  if (!query) {
      return res.status(400).json({ error: "Query is required" }); 
  }

  try {
      const newFAQ = await FAQ.create({ query });
      res.status(201).json({ message: "FAQ submitted successfully", faq: newFAQ });
  } catch (err) {
      console.error("Error saving FAQ:", err);
      res.status(500).json({ error: "Failed to save FAQ" }); 
  }
});

module.exports = router;
