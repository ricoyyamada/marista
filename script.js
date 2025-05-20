const questions = [
  // ... (as mesmas perguntas do exemplo anterior)
  // (Cole aqui as 20 questões do exemplo anterior)
];

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let selectedOption = null;
const maxErrors = 5;

const professorSpeech = document.getElementById('professor-speech');
const scoreCorrect = document.getElementById('score-correct');
const scoreWrong = document.getElementById('score-wrong');

function updateScoreboard() {
  scoreCorrect.textContent = correctAnswers;
  scoreWrong.textContent = wrongAnswers;
}

function professorSay(msg) {
  professorSpeech.innerHTML = msg;
}

function showQuestion() {
  const quizDiv = document.getElementById('quiz');
  const nextBtn = document.getElementById('nextBtn');
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = '';
  selectedOption = null;

  updateScoreboard();

  if (wrongAnswers >= maxErrors) {
    showResult(true);
    return;
  }

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    let html = `<div class="question">${q.question}</div><div class="options">`;
    q.options.forEach((opt, idx) => {
      html += `<label data-idx="${idx}"><input type="radio" name="option" value="${idx}"> ${opt}</label>`;
    });
    html += '</div>';
    quizDiv.innerHTML = html;
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;

    // Professor fala instrução
    professorSay(`Questão ${currentQuestion + 1} de ${questions.length}. Escolha a alternativa correta!`);

    // Seleção de opções ao estilo Duolingo
    document.querySelectorAll('.options label').forEach(label => {
      label.onclick = function() {
        document.querySelectorAll('.options label').forEach(l => l.classList.remove('selected', 'incorrect'));
        this.classList.add('selected');
        selectedOption = parseInt(this.getAttribute('data-idx'));
        nextBtn.disabled = false;
      };
    });
    window.scrollTo(0, 0);
  } else {
    showResult(false);
  }
}

function checkAnswer() {
  if (selectedOption === null) {
    professorSay('Por favor, selecione uma opção antes de avançar!');
    return;
  }
  const correctIdx = questions[currentQuestion].answer;
  const labels = document.querySelectorAll('.options label');
  if (selectedOption === correctIdx) {
    labels[selectedOption].classList.add('selected');
    correctAnswers++;
    professorSay('Muito bem! Você acertou! 👏');
    updateScoreboard();
    setTimeout(() => {
      currentQuestion++;
      showQuestion();
    }, 600);
  } else {
    labels[selectedOption].classList.add('incorrect');
    labels[correctIdx].classList.add('selected');
    wrongAnswers++;
    updateScoreboard();
    if (wrongAnswers >= maxErrors) {
      professorSay('Limite de erros atingido! 😢');
      setTimeout(() => showResult(true), 1000);
    } else {
      professorSay('Ops! Resposta incorreta. Tente a próxima!');
      setTimeout(() => {
        currentQuestion++;
        showQuestion();
      }, 900);
    }
  }
}

function showResult(failed) {
  const quizDiv = document.getElementById('quiz');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const resultDiv = document.getElementById('result');
  quizDiv.innerHTML = '';
  nextBtn.style.display = 'none';
  updateScoreboard();
  if (failed) {
    professorSay('Jogo encerrado! Você atingiu o limite de erros.');
    resultDiv.innerHTML = `Você acertou <b>${correctAnswers}</b> de <b>${questions.length}</b>.<br> Erros: <b>${wrongAnswers}</b>.<br> Clique em "Reiniciar" para tentar novamente!`;
  } else if (correctAnswers === questions.length) {
    professorSay('Parabéns! Você escapou da Biblioteca Encantada com perfeição! 🎉');
    resultDiv.innerHTML = '🎉 Você acertou todas as questões!';
  } else {
    professorSay('Fim do jogo! Veja seu desempenho abaixo.');
    resultDiv.innerHTML = `Você acertou <b>${correctAnswers}</b> de <b>${questions.length}</b>.<br> Erros: <b>${wrongAnswers}</b>.<br> Clique em "Reiniciar" para tentar novamente!`;
  }
  restartBtn.style.display = 'inline-block';
}

function restartGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  document.getElementById('restartBtn').style.display = 'none';
  professorSay('Jogo reiniciado! Você pode errar até <b>5 vezes</b>. Boa sorte!');
  showQuestion();
}

document.getElementById('nextBtn').onclick = checkAnswer;
document.getElementById('restartBtn').onclick = restartGame;

showQuestion();
