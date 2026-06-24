process.stdout.write = process.stdout.write.bind(process.stdout);

process.on("uncaughtException", function(error) {
    console.log("UNCAUGHT ERROR:", error.message);
    console.log("STACK:", error.stack);
});

require("dotenv").config();

const express  = require("express");
const cors     = require("cors");
const mongoose = require("mongoose");



const app = express();

app.use(cors());
app.use(express.json());

const authRoutes  = require("./routes/auth");
const scoreRoutes = require("./routes/scores");
const quizRoutes  = require("./routes/quizzes");
const profileRoutes = require("./routes/profile");

app.use("/api/auth",   authRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/profile", profileRoutes);


app.get("/", function(req, res) {
    res.json({ message: "Quizer API is running!" });
});

app.get("/test-profile", function(req, res) {
    res.json({ message: "profile routes loaded!" });
});


mongoose.connect(process.env.MONGO_URI)
    .then(function() {
        console.log("Connected to MongoDB");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, function() {
            console.log("Server running on http://localhost:" + PORT);
        });
    })
    .catch(function(error) {
        console.log("MongoDB connection error:", error.message);
    });