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

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  loadQuiz();
});
