// Questions loaded globally via questions.js
const questions = window.questions;

let currentIndex = 0;
let score = 0;
// Track selected answer index for each question [null, 0, 3, null, ...]
const userAnswers = new Array(questions.length).fill(null);
// Track if the answer has been revealed for each question
const revealed = new Array(questions.length).fill(false);

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const questionNumber = document.getElementById('question-number');
const progressFill = document.getElementById('progress-fill');
const explanationBox = document.getElementById('explanation-box');

function renderMath() {
    renderMathInElement(document.body, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
    });
}

function updateProgress() {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumber.textContent = `Question ${currentIndex + 1}/${questions.length}`;
}

function selectOption(optionIndex) {
    if (revealed[currentIndex]) return; // Already answered

    userAnswers[currentIndex] = optionIndex;
    revealed[currentIndex] = true;

    renderOptions();
    showExplanation();
}

function showExplanation() {
    const currentQuestion = questions[currentIndex];
    explanationBox.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
    explanationBox.classList.remove('hidden');
    renderMath(); // Re-render math in explanation
}

function renderOptions() {
    optionsContainer.innerHTML = '';
    const currentQuestion = questions[currentIndex];

    currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = opt;

        // State handling
        const isSelected = userAnswers[currentIndex] === idx;
        const isCorrect = opt === currentQuestion.correctAnswer;
        const isRevealed = revealed[currentIndex];

        if (isRevealed) {
            if (isCorrect) {
                btn.classList.add('correct');
            } else if (isSelected) {
                btn.classList.add('wrong');
            }
        } else if (isSelected) {
            btn.classList.add('selected');
        }

        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    renderMath(); // Re-render math in options
}

function loadQuestion() {
    const currentQuestion = questions[currentIndex];

    // Set text
    questionText.innerHTML = currentQuestion.question;

    // Reset or load explanation
    if (revealed[currentIndex]) {
        showExplanation();
    } else {
        explanationBox.classList.add('hidden');
        explanationBox.innerHTML = '';
    }

    renderOptions();
    updateProgress();

    // Button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent = currentIndex === questions.length - 1 ? 'Finish' : 'Next';

    renderMath();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        // Handle finish
        alert('Quiz Completed! Great job practicing Calculus.');
    }
});

// Initialize
loadQuestion();
