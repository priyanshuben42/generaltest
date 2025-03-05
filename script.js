let timeLeft = 60 * 60; // 60 minutes in seconds
const timerElement = document.getElementById("timer");
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const retryButton = document.getElementById("retryButton");

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `Time Left: ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    alert("Time's up! Submitting your quiz.");
    submitQuiz();
  }
}
updateTimer();

document.getElementById("submit").addEventListener("click", submitQuiz);

function submitQuiz() {
  let score = 0;
  let answers = {
    q1: "A",
    q2: "D",
    q3: "D",
    q4: "D",
    q5: "C",
    q6: "A",
    q7: "C",
    q8: "D",
    q9: "C",
    q10: "B",
    q11: "C",
    q12: "C",
    q13: "D",
    q14: "C",
    q15: "C",
    q16: "B",
    q17: "B",
    q18: "B",
    q19: "C",
    q20: "D",
    q21: "B",
    q22: "D",
    q23: "C",
    q24: "A",
    q25: "A",
    q26: "B",
    q27: "B",
    q28: "A",
    q29: "B",
    q30: "B",
    q31: "B",
    q32: "D",
    q33: "B",
    q34: "A",
    q35: "A",
    q36: "C",
    q37: "B",
    q38: "B",
    q39: "C",
    q40: "B",
    // Add all answers here (same as before)
  };
  let total = Object.keys(answers).length;

  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display result
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultText.textContent = `Your score: ${score}/${total}`;
}

retryButton.addEventListener("click", function () {
  location.reload(); // Reload the page to retry the quiz
});
