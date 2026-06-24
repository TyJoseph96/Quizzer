const express = require("express");
const router  = express.Router();
const bcrypt  = require("bcryptjs");
const jwt     = require("jsonwebtoken");
const User    = require("../models/User");
const { sendPasswordResetEmail, sendUsernameEmail } = require("../utils/email");
const crypto = require("crypto");


console.log("auth.js loaded");
console.log("User model:", User);

router.post("/register", async function(req, res) {

    console.log("=== REGISTER ROUTE HIT ===");
    console.log("Body:", req.body);

    try {

       
        console.log("Step 1 - extracting fields");
        const { username, email, password, dob } = req.body;
        console.log("username:", username, "email:", email);

        console.log("Step 2 - validating");
        if (!username || !email || !password || !dob) {
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Step 3 - checking existing user");
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });
        console.log("existingUser:", existingUser);

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already taken" });
        }

        console.log("Step 4 - hashing password");
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Step 5 - creating user");
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            dob:      new Date(dob)
        });

        console.log("Step 6 - saving user");
        await newUser.save();

        console.log("Step 7 - success!");
        res.status(201).json({ message: "Account created successfully!" });

    } catch (error) {
        console.log("=== REGISTER CATCH BLOCK ===");
        console.log("Error name:", error.name);
        console.log("Error message:", error.message);
        console.log("Error code:", error.code);
        console.log("Full error:", JSON.stringify(error, null, 2));
        res.status(500).json({ message: error.message });
    }

});

router.post("/login", async function(req, res) {

    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            message:  "Login successful!",
            token,
            username: user.username
        });

    } catch (error) {
        console.log("Login error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

router.post("/forgot", async function(req, res) {

    try {

        const { email, type } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "If that email exists we have sent you an email"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "If that email exists we have sent you an email"
            });
        }

        if (type === "username") {

            await sendUsernameEmail(email, user.username);

        } else {

            const resetToken = crypto.randomBytes(32).toString("hex");

            const resetTokenExpiry = new Date(Date.now() + 36000000);

            user.resetToken = resetToken;
            user.resetTokenExpiry = resetTokenExpiry;

            await user.save({ validateBeforeSave: false });

            await sendPasswordResetEmail(email, user.username, resetToken);
        }

        res.json({ message: "If that email exists we have sent you an email" });

    } catch (error) {
        console.log("Forgot error:", error.message);
        res.status(500).json({ message: error.message });
    }

});

router.post("/reset", async function(req, res) {

    try {

        const { token, newPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({
                message: "Token and new password are required"
            });

        }

        if (newPassword.length < 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const user = await User.findOne({
            resetToken:    token,
            resetTokenExpiry: { $gt: new Date() }
        });

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password        = hashedPassword;
        user.resetToken      = null;
        user.resetTokenExpiry = null;
        await user.save({ validateBeforeSave: false });

        res.json({ message: "Password reset successfully! You can now login." });

    } catch (error) {
        console.log("Reset error:", error.message);
        res.status(500).json({ message: error.message });
    }

});



module.exports = router;