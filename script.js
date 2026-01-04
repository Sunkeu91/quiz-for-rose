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
        question: "Do you have some trust in me?",
        options: ["Yes", "No"],
        correctAnswer: "Yes"
    }
];

// This will be the special final question asked at the end
const finalQuestion = {
    question: "Will you be my girlfriend once again?",
    options: ["Yes", "No"],
    correctAnswer: "Yes" // Assuming the answer is 'Yes' for success.
};

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
        return;  // Prevents moving to next question if no answer is selected
    }

    const userAnswer = selectedOption.value;
    answers.push(userAnswer);

    // Check if the answer is correct
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        alert("Okay Nice!");
    } else {
        alert("Hmm... not quite, but let's continue.");
    }

    currentQuestion++;  // Move to the next question

    // If we're done with regular questions, show the final question
    if (currentQuestion === questions.length) {
        showFinalQuestion();  // Show the final question after all regular ones
    } else {
        showQuestion();  // Continue with the next regular question
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);
    }
}

// Show the final question
function showFinalQuestion() {
    const questionData = finalQuestion;  // Use the final question

    // Update the question text
    document.getElementById('question').innerText = questionData.question;

    // Prepare options for the final question
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';  // Clear any previous options

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${option}" id="option${index}" />
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Update the Next button to handle the final answer submission
    document.querySelector("button").onclick = function() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');

        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        const userAnswer = selectedOption.value;
        answers.push(userAnswer);  // Save the final answer

        // Check the answer and display the result
        displayFinalResults(userAnswer);
    };
}

// Display the final results based on the last answer
function displayFinalResults(userAnswer) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';

    const finalMessage = userAnswer === 'Yes' ? "Yay! I'm so happy!" : "That's okay, maybe another time. 😅";
    document.getElementById('final-answer').innerText = finalMessage;

    // Hide the quiz section now
    document.getElementById('question-container').style.display = 'none';
}

// Ensure the DOM is ready before calling showQuestion
window.addEventListener("DOMContentLoaded", function() {
    showQuestion();  // Start the quiz by showing the first question
});












