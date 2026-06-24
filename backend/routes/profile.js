const express = require("express");
const router  = express.Router();
const User   = require("../models/User"); 
const Score  = require("../models/Score");
const Quiz   = require("../models/Quiz");

console.log("profile.js loaded!");
console.log("router type:", typeof router);

// ============================================
// GET /api/profile/:username
// Gets public profile data for any user
// No login required
// ============================================

router.get("/:username", async function(req, res) {

    try {

        const username = req.params.username;

        const user = await User.findOne ({username});

        if (!user) {
            return res.status(404).json({ message: "User is not found" });
        }

        const scores = await Score.find({ "userId": user._id})
          .sort({ "score": -1 })
          .limit(5);

        const bestScore = scores.length > 0 ? scores[0] : null;

        const quizzes = await Quiz.find({ "userId": user._id})
            
        .sort({ "createdAt": -1 })
        
        .select("title category questions plays createdAt");


            
     res.json({
        username:   user.username,
        memberSince:  user.createdAt,
        totalGamePlayed: scores.length,
        quizzesCreated:  quizzes.length,
        bestScore:       bestScore,
        recentScores:     scores,
        createdQuizzes:   quizzes,

     });

    } catch (error) {
        console.log("Profile error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

module.exports = router;