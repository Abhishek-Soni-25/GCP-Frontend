const { Router } = require("express");
const FAQ = require("../models/faq.models");

const router = Router();


router.route("/submit-faq").post(async (req, res) => {
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