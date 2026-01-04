let currentQuestion = 0;
let answers = [];

const questions = [
    {
        question: "What's your favorite color?",
        options: ["Red", "Blue", "Green", "Purple"],
        correctAnswer: "Purple"
    },
    {
        question: "Do you still have feelings?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "Despite our hardships, do you still think about our relationship?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "Do you want to have a relationship with me?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    },
    {
        question: "do you have some trust in me?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    }
];

// Show current question and options
function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';  // Clear previous options

    // Create radio buttons for each option
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${option}" id="option${index}" />
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

// Function to move to next question after user selection
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer!"); 
        return; 
    }

    const userAnswer = selectedOption.value;
    answers.push(userAnswer);

    // Check if the answer is correct
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        alert("Okay Nice!");
    } else {
        alert("Hmm... not quite, but let's continue.");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();  
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false); 
    } else {
        displayResults();  
    }
}

// Display the final result after all questions
function displayResults() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    const finalQuestionAnswer = answers[answers.length - 1]; // Last answer
    const finalMessage = finalQuestionAnswer === 'Yes' ? "Yay! I'm so happy!" : "That's okay, maybe another time. 😅";
    
    document.getElementById('final-answer').innerText = finalMessage;
}

window.addEventListener("DOMContentLoaded", function() {
    showQuestion();  // This ensures the DOM is ready before calling showQuestion
});













