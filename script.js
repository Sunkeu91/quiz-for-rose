let currentQuestion = 0;
let answers = [];

const questions = [
    {
        question: "What's your favorite color?",  // Example question
        options: ["Red", "Blue", "Green", "purple"],
        correctAnswer: "purple"
    },
    {
        question: "do you still have feelings for me?",  // Example question
        options: ["yes", "no", "maybe", "idk"],
        correctAnswer: "yes"
    },
    {
        question: "despite our hardships do you still think abt our relationship?",  // Example question
        options: ["yes", "no", "maybe", "idkj"],
        correctAnswer: "yes"
    },
    {
        question: "Do you want to have PS with me?",  // Your new question
        options: ["Yes", "No"],
        correctAnswer: "Yes"  // You can customize the correct answer here
    },
    {
        question: "Will you be my girlfriend once again?",  // Final question
        options: ["Yes", "No"],
        correctAnswer: "Yes"  // You can customize the correct answer here as well
    }
];

function showQuestion() {
    const questionData = questions[currentQuestion];
    
    // Display the question text
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

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert("Please select an answer!");  // Alert if no answer is selected
        return;  // Stop the function if no option is selected
    }

    const userAnswer = selectedOption.value;  // Get the selected answer
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
        showQuestion();
        document.querySelectorAll('input[name="answer"]').forEach(input => input.checked = false);  // Reset radio buttons
    } else {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
    }
}

function showAnswer(answer) {
    const finalAnswer = answer === 'yes' ? "Yay! I'm so happy!" : "That's okay, maybe another time. 😅";
    document.getElementById('final-answer').innerText = finalAnswer;

    document.getElementById('result-container').style.display = 'none';
    document.getElementById('answer-container').style.display = 'block';
}

window.onload = showQuestion;  // Show the first question when the page loads









