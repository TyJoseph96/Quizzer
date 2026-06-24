const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({

    question: {
        type: String,
        required: true,
        trim: true
    },

    answers: {
        type: [String],
        required: true,
        validate: { validator: function(array) { return array.length === 4 }, message: "Must provide exactly 4 answers" }

    }, 

    correctAnswer: {
        type: String,
        required: true,
        min: 0,
        max: 3
    }
});

// Ful quiz schemea 

const quizSchema = new mongoose.Schema({

    title: {
        type: String,
        required:true,
        trim: true,
        minlength: 0,
        maxlength: 50
    },

    description: {
        type: String,
        trim: true,
        maxlenght: 200,
        default: ""
    },

    category: {
        type: String,
        required: true,
    },

    questions: {
        type: [questionSchema],
        required: true,
        validate: { validator: function(array) { return array.length > 0 }, 
        message: "Quiz must have at least one question" }

    
        
    }, 

    createdBy: {
       type: String,
       required: true
   },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },

    plays: {
        type: Number,
        default: 0

    },

    createAt: {
        type: Date,
        default: Date.now
    }
 

});

module.exports = mongoose.model("Quiz", quizSchema);




