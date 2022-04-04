const quizData = [
  {
    question: "What is the best programming language?",
    a: "Python",
    b: "Java",
    c: "PHP",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Siapakah President Indonesia sekarang?",
    a: "Jokowi",
    b: "SBY",
    c: "Megawati",
    d: "Soekarno",
    correct: "a",
  },
  {
    question: "Tahun berapa Titanic tenggelam di Samudra Atlantik pada 15 April, dalam pelayaran perdananya dari Southampton?",
    a: "2000",
    b: "1912",
    c: "2012",
    d: "1920",
    correct: "b",
  },
  {
    question: "Apa nama perusahaan teknologi terbesar di Korea Selatan?",
    a: "Microsoft",
    b: "Apple",
    c: "Samsung",
    d: "Google",
    correct: "c",
  },
  {
    question: "Apa burung terkecil di dunia?",
    a: "Elang",
    b: "Love Bird",
    c: "Punglor",
    d: "Lebah Hummingbird",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Tampil Question dan pilihan ganda pada html
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  document.getElementById("a_text").innerText = currentQuizData.a;
  document.getElementById("b_text").innerText = currentQuizData.b;
  document.getElementById("c_text").innerText = currentQuizData.c;
  document.getElementById("d_text").innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Deselect radio button saat pencet submit
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}

submitBtn.addEventListener("click", () => {
  // check jawaban
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2 style="text-align: center;">Jawaban Benar ${score}/${quizData.length}</h2> 
                        <button onclick="location.reload()">Ulang</button>`;
    }
  }
});
