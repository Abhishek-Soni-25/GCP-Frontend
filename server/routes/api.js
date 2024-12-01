// server/routes/api.js

const express = require('express');
const router = express.Router(); 

// Importing the models 
const FAQModel = require("../models/faq.models");
const ContactUsModel = require("../models/contactus.models");

// A sample API route
router.get('/message', (req, res) => {
  res.json({ message: 'Hello from the API route!' }); 
});

// POST route to submit a new FAQ
router.post("/submit-faq", async (req, res) => {
  const { query } = req.body;

  if (!query) {
      return res.status(400).json({ error: "Query is required" }); 
  }

  try {
      const newFAQ = await FAQModel.create({ query });
      res.status(201).json({ message: "FAQ submitted successfully", faq: newFAQ });
  } catch (err) {
      console.error("Error saving FAQ:", err);
      res.status(500).json({ error: "Failed to save FAQ" }); 
  }
});

// POST route to submit contact-us details
router.post("/contactus", async (req, res) => {

  const {name, email, phone, country, message} = req.body;

  // Validate all fields are required
  if (!name || !email || !phone || !country || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  
  // Validate message length
  if (message.length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters long." });
  }

  // Validate email format
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // Validate phone number
  const phoneRegex = /^\+\d{1,3}\d{10}$/;
  phoneNumber = phone.replace(/[\s\-\(\)]/g, "");
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ error: "Invalid phone number" });
  }

  try {
    // Save to the database
    const newContact = await ContactUsModel.create({
        name, email, phone, country, message
    });

    return res.status(200).json({
        message: "Contact details submitted successfully.",
        data: newContact,
    });
  } catch (error) {
    console.error("Error saving contact details:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

});

module.exports = router;
