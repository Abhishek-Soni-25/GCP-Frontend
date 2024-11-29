const { Router } = require("express");

const router = Router();

router.route("/").get((req, res) => {
    const baseUrl = req.protocol + "://" + req.get("host");
    res.send("Base URL is: " + baseUrl);
});

module.exports = router;
