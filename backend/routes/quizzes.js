const express = require("express");
const router = express.Router();
const JWT = require("jsonwebtoken");
const Quiz = require("../models/Quiz");

// VERIFY TOKEN MIDDLEWARE
function verifyToken (req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

// ============================================
// POST /api/quizzes/create
// Creates a new community quiz
// Requires login
// ============================================

router.post("/create", verifyToken, async function(req, res) {

    try {

        const { title, description, category, questions } = req.body;

        // Validate
        if (!title || !category || !questions) {
            return res.status(400).json({
                message: "Title, category and questions are required"
            });
        }

        if (questions.length < 3) {
            return res.status(400).json({
                message: "Quiz must have at least 3 questions"
            });
        }

// Check each question has 4 answers
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].answers.length !== 4) {
                return res.status(400).json({
                    message: "Question " + (i + 1) + " must have exactly 4 answers"
                });
            }
        }
 // Create new quiz
        const newQuiz = new Quiz({
            title,
            description,
            category,
            questions,
            createdBy: req.user.username,
            userId: req.user.userId
        });

        await newQuiz.save();

        res.status(201).json({ message: "Quiz created successfully!",
        quizId:  newQuiz._id

        });
    } catch (error) {
        console.log("Create quiz error:", error.message);
        res.status(500).json({ message: error.message });
    }
    
    });
///============================================
// GET /api/quizzes/all
// Gets all quizzes from MongoDB
// No login required
//=============================================

     router.get("/all", async function(req, res) {

        try {

            const quizzes = await Quiz.find()
              .sort({ createdAt: -1 })

              res.json(quizzes);

          }  catch (error) {

            console.log("Get quizzes error", error.message);
            res.status(500).json({message: error.message});
         }
        });
// ============================================
// GET /api/quizzes/:id
// Gets one quiz by its id
// No login required
// ============================================

     router.get("/:id", async function(req, res) {

        try {

            const quiz = await Quiz.findById(req.params.id);

            if (!quiz) {
                return res.status(404).json({ message: "Quiz not found" });

            }

            quiz.plays +=1;
            await quiz.save();

            res.json(quiz);

        
        } catch (error) {
            console.log("Get quiz error:", error.message);
            res.status(500).json({ message: error.message });
        }
        });

// ============================================
// DELETE /api/quizzes/:id
// Deletes a quiz — only the creator can delete
// ============================================

        router.delete("/:id", verifyToken, async function(req, res) {

            try {

                const quiz = await Quiz.findById(req.params.id);

                if (!quiz) {
                    return res.status(404).json({ message: "Quiz not found" });
 
                }

                if (quiz.userId.toString() !== req.user.userId) {
                    return re.status(403).json({ message: "You can only delete your own quizzes" });

                }

                await quiz.remove();
                res.json({ message: "Quiz deleted" });

            } catch (error) {
                console.log("Delete quiz error:", error.message);
                res.status(500).json({ message: error.message });
            }
            
        });

module.exports = router;