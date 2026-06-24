const selectedCategory = localStorage.getItem("selectedCategory") || "general";
const quizType        = localStorage.getItem("quizType");

let questions = []; 

// ============================================
// GAME STATE VARIABLES
// ============================================

let currentQuestionIndex = 0;
let score                = 0;
let answered             = false;
let timerInterval        = null;
const TIME_PER_QUESTION  = 15;


// ============================================
// FUNCTION 1: Load and display a question
// ============================================

function loadQuestion() {

    answered = false;

    document.getElementById("next-btn").style.display = "none";

    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").className   = "feedback";

    const currentQuestion = questions[currentQuestionIndex];

    document.getElementById("question-counter").textContent =
        "Question " + (currentQuestionIndex + 1) + " of " + questions.length;

    const questionsLeft = questions.length - currentQuestionIndex;
    document.getElementById("questions-left").textContent =
        questionsLeft + " question" + (questionsLeft === 1 ? "" : "s") + " remaining";

    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    document.getElementById("progress-fill").style.width = progressPercent + "%";

    document.getElementById("question-text").textContent = currentQuestion.question;

    const answersGrid = document.getElementById("answers-grid");
    answersGrid.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, index) {
        const button       = document.createElement("button");
        button.className   = "answer-btn";
        button.textContent = answer;
        button.onclick     = function() { checkAnswer(index, button); };
        answersGrid.appendChild(button);
    });

    startTimer();

}


// ============================================
// FUNCTION 2: Start the countdown timer
// ============================================

function startTimer() {

    let timeLeft = TIME_PER_QUESTION;

    document.getElementById("timer-number").textContent  = timeLeft;
    document.getElementById("timer-bar-fill").style.width = "100%";
    document.querySelector(".timer-section").classList.remove("timer-low");
    document.getElementById("timer-number").classList.remove("timer-pulse");

    timerInterval = setInterval(function() {

        timeLeft--;

        document.getElementById("timer-number").textContent = timeLeft;

        const timerPercent = (timeLeft / TIME_PER_QUESTION) * 100;
        document.getElementById("timer-bar-fill").style.width = timerPercent + "%";

        if (timeLeft <= 5) {
            document.querySelector(".timer-section").classList.add("timer-low");
            document.getElementById("timer-number").classList.add("timer-pulse");
        }

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            if (!answered) {

                answered = true;

                const allButtons      = document.querySelectorAll(".answer-btn");
                const currentQuestion = questions[currentQuestionIndex];

                allButtons.forEach(function(btn) { btn.disabled = true; });
                allButtons[currentQuestion.correctAnswer].classList.add("correct");

                const feedback       = document.getElementById("feedback");
                feedback.textContent = "⏱️ Time's up! The correct answer was: " +
                    currentQuestion.answers[currentQuestion.correctAnswer];
                feedback.classList.add("wrong-feedback");

                document.getElementById("next-btn").style.display = "block";

            }
        }

    }, 1000);

}


// ============================================
// FUNCTION 3: Stop the timer
// OUTSIDE all other functions so everything can see it
// ============================================

function stopTimer() {
    clearInterval(timerInterval);
    document.querySelector(".timer-section").classList.remove("timer-low");
    document.getElementById("timer-number").classList.remove("timer-pulse");
}


// ============================================
// FUNCTION 4: Check the player's answer
// ============================================

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) return;
    answered = true;

    stopTimer();

    const currentQuestion = questions[currentQuestionIndex];
    const allButtons      = document.querySelectorAll(".answer-btn");
    const feedback        = document.getElementById("feedback");

    allButtons[currentQuestion.correctAnswer].classList.add("correct");

    if (selectedIndex === currentQuestion.correctAnswer) {

        score++;
        document.getElementById("score").textContent = score;

        const scoreEl = document.getElementById("score");
        scoreEl.classList.add("score-pop");
        setTimeout(function() {
            scoreEl.classList.remove("score-pop");
        }, 300);

        const correctMessages = [
            "Correct! Well done! ✅",
            "That's right! Great job! ✅",
            "Nailed it! ✅"
        ];
        feedback.textContent = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        feedback.classList.add("correct-feedback");

    } else {

        selectedButton.classList.add("wrong");
        const correctAnswerText = currentQuestion.answers[currentQuestion.correctAnswer];
        feedback.textContent    = "Wrong! The correct answer was: " + correctAnswerText + " ❌";
        feedback.classList.add("wrong-feedback");

    }

    allButtons.forEach(function(btn) { btn.disabled = true; });
    document.getElementById("next-btn").style.display = "block";

}


// ============================================
// FUNCTION 5: Move to the next question
// ============================================

function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }

}


// ============================================
// FUNCTION 6: Show the results screen
// ============================================

function showResults() {

    stopTimer();

    document.querySelector(".container").style.display   = "none";
    document.getElementById("results-screen").style.display = "flex";

    document.getElementById("final-score").textContent =
        "You scored " + score + " out of " + questions.length;

    const percentage  = (score / questions.length) * 100;
    const stars       = Math.round(percentage / 20);
    const starDisplay = "⭐".repeat(stars) + "🌑".repeat(5 - stars);
    document.getElementById("star-rating").textContent = starDisplay;

    let message = "";
    if      (percentage === 100) message = "Perfect score! You're a true gaming legend! 🎮👑";
    else if (percentage >= 80)   message = "Excellent! You really know your gaming history! 🔥";
    else if (percentage >= 60)   message = "Good effort! You know your games pretty well! 👾";
    else if (percentage >= 40)   message = "Not bad! Keep playing and you'll know more! 🕹️";
    else                         message = "Better luck next time! Time to hit the games! 👻";

    document.getElementById("result-message").textContent = message;

    // "saveScore" not "saveScoreLeader" — fixed wrong function name
    saveScore();
    displayLeaderboard();

}


// ============================================
// FUNCTION 7: Save score to localStorage
// OUTSIDE all other functions
// ============================================

// ============================================
// FUNCTION: Save score to backend
// ============================================

async function saveScore() {

    // ---- GET THE LOGIN TOKEN ----
    // When the player logged in we saved the token to localStorage
    // We need it to prove who we are to the server
    const token = localStorage.getItem("token");

    // If no token the player is not logged in
    // Save to localStorage as a fallback instead
    if (!token) {
        saveScoreLocally();
        return;
    }

    try {

        // ---- SEND SCORE TO BACKEND ----
        const response = await fetch("http://localhost:3000/api/scores/save", {
            method: "POST",
            // POST because we are creating a new score

            headers: {
                "Content-Type": "application/json",
                // tells server we are sending JSON

                "Authorization": "Bearer " + token
                // sends the token so server knows who we are
                // verifyToken middleware in scores.js reads this
            },

            body: JSON.stringify({
                category: selectedCategory,
                // which category was played e.g. "fps"
                score:    score,
                // how many correct answers
                total:    questions.length
                // total questions e.g. 25
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Score saved to database!");
        } else {
            console.log("Error saving score:", data.message);
            // Fall back to localStorage if server save fails
            saveScoreLocally();
        }

    } catch (error) {
        // Server not reachable — save locally instead
        console.log("Server not reachable — saving locally");
        saveScoreLocally();
    }

}


// ============================================
// FUNCTION: Save score locally as fallback
// Used when player is not logged in
// ============================================

function saveScoreLocally() {

    const savedScores = localStorage.getItem("gamingQuizScores");
    let scoresArray   = savedScores ? JSON.parse(savedScores) : [];

    const today = new Date();
    const formattedDate =
        String(today.getDate()).padStart(2, "0")       + "/" +
        String(today.getMonth() + 1).padStart(2, "0") + "/" +
        today.getFullYear();

    const newScore = {
        score:    score,
        total:    questions.length,
        category: selectedCategory,
        date:     formattedDate
    };

    scoresArray.push(newScore);
    scoresArray.sort(function(a, b) { return b.score - a.score; });
    scoresArray = scoresArray.slice(0, 5);

    localStorage.setItem("gamingQuizScores", JSON.stringify(scoresArray));

}


// ============================================
// FUNCTION 8: Display the leaderboard
// OUTSIDE saveScore — was trapped inside before
// ============================================

// ============================================
// FUNCTION: Display leaderboard on results screen
// ============================================

async function displayLeaderboard() {

    const leaderboardList = document.getElementById("leaderboard-list");
    const token           = localStorage.getItem("token");

    // Show loading message while fetching
    leaderboardList.innerHTML = "<p class='no-scores'>Loading scores...</p>";

    // ---- IF LOGGED IN — fetch from backend ----
    if (token) {

        try {

            const response = await fetch(
                "http://localhost:3000/api/scores/my-scores",
                {
                    headers: {
                        "Authorization": "Bearer " + token
                        // sends token so server knows whose scores to fetch
                    }
                }
            );

            const scores = await response.json();

            if (response.ok && scores.length > 0) {
                buildLeaderboardRows(scores, true);
                // true = scores came from backend
            } else {
                leaderboardList.innerHTML =
                    "<p class='no-scores'>No scores yet. Play to set a record! 🎮</p>";
            }

        } catch (error) {
            // Server not reachable — fall back to localStorage
            displayLocalLeaderboard();
        }

    } else {
        // ---- NOT LOGGED IN — use localStorage ----
        displayLocalLeaderboard();
    }

}


// ---- Build leaderboard rows from an array of scores ----
function buildLeaderboardRows(scores, fromBackend) {

    const leaderboardList  = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = "";

    // Category display names
    const categoryNames = {
        general: "🎮 General",
        lore:    "⚔️ Lore",
        console: "🏆 Consoles",
        retro:   "👾 Retro",
        fps:     "🔫 FPS"
    };

    scores.forEach(function(entry, index) {

        const row     = document.createElement("div");
        row.className = "leaderboard-row";
        if (index === 0) row.classList.add("top-score");

        // Medal for top 3
        let rank = "";
        if      (index === 0) rank = "🥇";
        else if (index === 1) rank = "🥈";
        else if (index === 2) rank = "🥉";
        else                  rank = "#" + (index + 1);

        // Format date
        let dateDisplay = "";
        if (fromBackend && entry.createdAt) {
            // Backend scores have a createdAt timestamp
            const d = new Date(entry.createdAt);
            dateDisplay =
                String(d.getDate()).padStart(2, "0")       + "/" +
                String(d.getMonth() + 1).padStart(2, "0") + "/" +
                d.getFullYear();
        } else {
            dateDisplay = entry.date || "";
        }

        // Category name
        const catName = categoryNames[entry.category] || "🎮 Gaming";

        row.innerHTML = `
            <span class="leaderboard-rank">${rank}</span>
            <span class="leaderboard-score">
                ${entry.score} / ${entry.total}
                <small style="color:#aaa; font-size:0.7rem;">
                    ${catName}
                </small>
            </span>
            <span class="leaderboard-date">${dateDisplay}</span>
        `;

        leaderboardList.appendChild(row);

    });

}


// ---- Show localStorage scores when not logged in ----
function displayLocalLeaderboard() {

    const savedScores = localStorage.getItem("gamingQuizScores");
    const scores      = savedScores ? JSON.parse(savedScores) : [];

    if (scores.length === 0) {
        document.getElementById("leaderboard-list").innerHTML =
            "<p class='no-scores'>No scores yet. Play to set a record! 🎮</p>";
        return;
    }

    buildLeaderboardRows(scores, false);

}

// ============================================
// FUNCTION 9: Clear the leaderboard
// ============================================

function clearLeaderboard() {

    const confirmed = confirm("Are you sure you want to clear all scores?");

    if (confirmed) {
        localStorage.removeItem("gamingQuizScores");
        displayLeaderboard();
    }

}
///============================================
// Go Home
//=============================================

function goHome() {

    localStorage.removeItem("quizType");
    localStorage.removeItem("communityquizId");

    window.location.href = "Home.html";
}

// ============================================
// FUNCTION 10: Restart the quiz
// ============================================

function restartQuiz() {

     stopTimer();

    currentQuestionIndex = 0;
    score                = 0;
    answered             = false;

    document.getElementById("score").textContent            = 0;
    document.getElementById("results-screen").style.display = "none";
    document.querySelector(".container").style.display      = "block";

    loadQuestion();

}

if (quizType === "community") {
    async function loadCommunityQuiz() {
        try {
            const quizId    = localStorage.getItem("communityQuizId");

            if (!quizId) {
                questions = generalQuestions;
                loadQuestion();
                return;
            }
            const response = await fetch(`http://localhost:3000/api/quizzes/${quizId}`);
            const quiz     = await response.json();

            if (!response.ok || !quiz.questions) {
                questions  = generalQuestions;
                loadQuestion();
                return;
            }
            questions = quiz.questions;
            loadQuestion();
        } catch (error) {
            console.log("Error loading community quiz:", error);
            questions = generalQuestions;
            loadQuestion();
        }
    }
    loadCommunityQuiz();
} else {
    if (selectedCategory === "general") questions = generalQuestions;
    else if (selectedCategory === "lore") questions = loreQuestions;
    else if (selectedCategory === "console") questions = consoleQuestions;
    else if (selectedCategory === "fps") questions = fpsQuestions;
    else if (selectedCategory === "retro") questions = retroQuestions;
    else questions = generalQuestions;
    loadQuestion();
}



// ============================================ 
// START THE QUIZ
// ============================================

window.onload = function() {
   
};