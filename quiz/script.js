const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyperlinks Text Module Language", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which language is used for web apps?",
        answers: [
            { text: "PHP", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "All", correct: false }
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

startQuiz();

function startQuiz() {
    scoreContainer.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    progressBar.style.width = "0%";
    nextButton.disabled = true;
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn', 'btn-outline-primary');
        button.addEventListener('click', () => selectAnswer(button, answer.correct));
        answerButtonsElement.appendChild(button);
    });

    updateProgress();
}

function resetState() {
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(button, correct) {
    const selectedButton = button;
    if (correct) {
        selectedButton.classList.add('btn-success');
        score++;
    } else {
        selectedButton.classList.add('btn-danger');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button !== selectedButton && questions[currentQuestionIndex].answers.find(ans => ans.text === button.textContent).correct) {
            button.classList.add('btn-success');
        }
    });
    nextButton.disabled = false;
}

function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    document.getElementById('question-container').style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.textContent = `${score} / ${questions.length}`;
    progressBar.style.width = "100%";
}

restartButton.addEventListener('click', () => {
    document.getElementById('question-container').style.display = 'block';
    startQuiz();
});
