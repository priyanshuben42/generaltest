let timeLeft = 60 * 60; // 60 minutes in seconds
const timerElement = document.getElementById("timer");
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const retryButton = document.getElementById("retryButton");
const studentForm = document.getElementById("studentForm");
const studentFormContainer = document.getElementById("studentFormContainer");
const studentDetails = document.getElementById("studentDetails");

// Handle Student Form Submission
studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const studentName = document.getElementById("studentName").value;
  const studentEmail = document.getElementById("studentEmail").value;

  localStorage.setItem("studentName", studentName);
  localStorage.setItem("studentEmail", studentEmail);

  studentFormContainer.style.display = "none";
  quizContainer.style.display = "block";
  updateTimer();
});

// Timer Function
function updateTimer() {

  
  if (timeLeft <= 0 || quizContainer.style.display === "none") return;  // Stop timer when quiz ends
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
  };
  let total = Object.keys(answers).length;

  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display result with student details
  const storedName = localStorage.getItem("studentName");
  const storedEmail = localStorage.getItem("studentEmail");
  studentDetails.innerHTML = `<strong>Name:</strong> ${storedName} <br> <strong>Email:</strong> ${storedEmail}`;

  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  resultText.textContent = `Your score: ${score}/${total}`;
}

retryButton.addEventListener("click", function () {
  location.reload(); // Reload the page to retry the quiz
});

// Add an event listener to change the background image
document.addEventListener("DOMContentLoaded", function () {
    const backgroundInput = document.createElement("input");
    backgroundInput.type = "file";
    backgroundInput.accept = "image/*";
    backgroundInput.id = "backgroundInput";
    
    const label = document.createElement("label");
    label.textContent = "Choose Background Image";
    label.setAttribute("for", "backgroundInput");
    label.style.display = "block";
    label.style.margin = "10px 0";
    label.style.cursor = "pointer";
    
    document.body.prepend(label);
    document.body.prepend(backgroundInput);
    
    backgroundInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.body.style.backgroundImage = `url('${e.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });
});
