const express = require("express");
const router  = express.Router();
const jwt     = require("jsonwebtoken");
const Score   = require("../models/Score");

// ---- VERIFY TOKEN MIDDLEWARE ----
function verifyToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }

}

// ---- SAVE SCORE ----
router.post("/save", verifyToken, async function(req, res) {

    try {

        const { category, score, total } = req.body;

        if (!category || score === undefined || !total) {
            return res.status(400).json({ message: "All fields required" });
        }

        const percentage = Math.round((score / total) * 100);

        const newScore = new Score({
            userId:     req.user.userId,
            username:   req.user.username,
            category,
            score,
            total,
            percentage
        });

        await newScore.save();
        res.json({ message: "Score saved!" });

    } catch (error) {
        console.log("Save score error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

// ---- GLOBAL LEADERBOARD ----
router.get("/leaderboard", async function(req, res) {

    try {
        const scores = await Score.find()
            .sort({ score: -1 })
            .limit(10);
        res.json(scores);
    } catch (error) {
        console.log("Leaderboard error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

// ---- MY SCORES ----
router.get("/my-scores", verifyToken, async function(req, res) {

    try {
        const scores = await Score.find({ userId: req.user.userId })
            .sort({ score: -1 })
            .limit(5);
        res.json(scores);
    } catch (error) {
        console.log("My scores error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

module.exports = router;
