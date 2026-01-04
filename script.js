let currentQuestion = 0;
let answers = [];

const questions = [
    {
        question: "What's my favorite color?",
        options: ["purple", "red", "blue", "green"],
        correctAnswer: "purple"
    },
    {
        question: "What's my favorite food?",
        options: ["flan", "pizza", "burger", "sushi"],
        correctAnswer: "flan"
    },
    {
        question: "Do you like me and would you ever wanna get back with me?",
        options: ["yes", "no"],
        correctAnswer: "yes"
    },
    {
        question: "Despite our hardships, could you forgive me enough to come back?",
        options: ["yes", "no"],
        correctAnswer: "yes"
    }
];

// Function to display the current question
function showQuestion() {
    const questionData = questions[currentQuestion];
    
    // Display the question text
    document.getElementById('question').innerText = questionData.question;

    // Clear previous options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

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

// Function to check the answer and move to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');  // Get the selected radio button

    if (!selectedOption) {
        alert("Please select an answer!");  // Alert if no answer is selected
        return;  // Stop the function if no option is selected
    }

    const userAnswer = selectedOption.value;  // Get the value of the selected radio button
    answers.push(userAnswer);  // Save the user's answer

    // Check if the answer is correct
    if (userAnswer === questions[currentQuestion].correctAnswer) {
        alert("Correct! Let's move on!");
    } else {
        alert("Hmm... not quite, but let's continue.");
    }

    currentQuestion++;

    // If there are more questions, update the question, else show the result
    if (currentQuestion < questions.length) {
        showQuestion();  // Display the next question
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);  // Reset radio buttons
    } else {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
    }
}

// Function to show the final answer
function showAnswer(answer) {
    const finalAnswer = answer === 'yes' ? "Yay! I'm so happy!" : "That's okay, maybe another time. 😅";
    document.getElementById('final-answer').innerText = finalAnswer;

    document.getElementById('result-container').style.display = 'none';
    document.getElementById('answer-container').style.display = 'block';
}

// Show the first question when the page loads
window.onload = showQuestion;

