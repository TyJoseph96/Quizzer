const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// ============================================
// FUNCTION: Send password reset email
// ============================================

async function sendPasswordResetEmail(toEmail, username, resetToken) {

    const resetLink = `http://127.0.0.1:5500/reset.html?token=${resetToken}`;

    const mailOptions = {
        from:    process.env.EMAIL_USER,
        to:      toEmail,
        subject: "Quizer — Reset Your Password 🎮",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
                <h2 style="color: #6366f1;">🎮 Quizer Password Reset</h2>
                <p>Hi <strong>${username}</strong>!</p>
                <p>Click the button below to set a new password:</p>
                <a href="${resetLink}"
                   style="display: inline-block;
                          background-color: #6366f1;
                          color: white;
                          padding: 12px 24px;
                          border-radius: 8px;
                          text-decoration: none;
                          margin: 20px 0;">
                    Reset Password
                </a>
                <p style="color: #aaa; font-size: 0.85rem;">
                    This link expires in 1 hour.
                </p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);

}


// ============================================
// FUNCTION: Send username recovery email
// ============================================

async function sendUsernameEmail(toEmail, username) {

    const mailOptions = {
        from:    process.env.EMAIL_USER,
        to:      toEmail,
        subject: "Quizer — Your Username 🎮",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
                <h2 style="color: #6366f1;">🎮 Quizer Username Recovery</h2>
                <p>Your username is:</p>
                <h1 style="color: #6366f1; font-size: 2rem;">${username}</h1>
                <p style="color: #aaa; font-size: 0.85rem;">
                    If you didn't request this ignore this email.
                </p>
            </div>
        `
    };

    await transporter.sendMail(mailOptions);

}


module.exports = { sendPasswordResetEmail, sendUsernameEmail };