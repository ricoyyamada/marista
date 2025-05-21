// Frases de elogio para acertos
var frasesAcerto = [
  "Muito bem!",
  "Ótimo trabalho!",
  "Parabéns, você acertou!",
  "Resposta correta, continue assim!",
  "Arrasou!",
  "Excelente escolha!",
  "Você está mandando bem!",
  "Acertou em cheio!",
  "Show de bola!",
  "Mandou ver!"
];

// Frases de excelência para acertos consecutivos
var frasesExcelencia = [
  "Sensacional! Você acertou várias seguidas!",
  "Incrível! Uma sequência de acertos!",
  "Você está em uma ótima fase!",
  "Que desempenho brilhante!",
  "Continue assim, campeão(ã)!"
];

// Frases motivacionais para respostas erradas
var frasesErro = [
  "Não desanime, tente a próxima!",
  "Errou, mas não desista!",
  "Continue tentando, você consegue!",
  "Força! A próxima você acerta!",
  "Errar faz parte do aprendizado.",
  "Levante a cabeça e siga em frente!",
  "Você está quase lá!",
  "Continue focado!",
  "Não se preocupe, tente de novo!",
  "O importante é continuar tentando!"
];

// Função para frase aleatória
function fraseAleatoria(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Função para sortear 20 questões aleatórias do banco de 100
function getRandomQuestions(allQuestions, n) {
  let shuffled = allQuestions.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
  {
    question: '1. "O vento sussurrava segredos nas árvores." Qual figura de linguagem está presente?',
    options: ['Metáfora', 'Personificação', 'Hipérbole'],
    answer: 1
  },
  {
    question: '2. "Ela estava com um coração de pedra." Qual figura de linguagem?',
    options: ['Metáfora', 'Antítese', 'Eufemismo'],
    answer: 0
  },
  {
    question: '3. "Estou morrendo de sede." Qual figura de linguagem?',
    options: ['Metonímia', 'Hipérbole', 'Ironia'],
    answer: 1
  },
  {
    question: '4. "O sol sorriu para mim." Qual figura de linguagem?',
    options: ['Personificação', 'Comparação', 'Paradoxo'],
    answer: 0
  },
  {
    question: '5. "Ele era forte como um touro." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 1
  },
  {
    question: '6. "Ele tem um coração de ouro." Qual figura de linguagem?',
    options: ['Comparação', 'Metáfora', 'Antítese'],
    answer: 1
  },
  {
    question: '7. "Choveu canivetes ontem." Qual figura de linguagem?',
    options: ['Hipérbole', 'Metonímia', 'Ironia'],
    answer: 0
  },
  {
    question: '8. "A multidão gritava em silêncio." Qual figura de linguagem?',
    options: ['Paradoxo', 'Eufemismo', 'Metáfora'],
    answer: 0
  },
  {
    question: '9. "Ele fugiu feito um coelho." Qual figura de linguagem?',
    options: ['Comparação', 'Metáfora', 'Antítese'],
    answer: 0
  },
  {
    question: '10. "A vida é uma caixinha de surpresas." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Hipérbole'],
    answer: 0
  },
  {
    question: '11. "A morte é apenas uma passagem." Qual figura de linguagem?',
    options: ['Eufemismo', 'Antítese', 'Ironia'],
    answer: 0
  },
  {
    question: '12. "Ele é um poço de paciência." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Metonímia'],
    answer: 0
  },
  {
    question: '13. "O Brasil venceu com facilidade: 10 a 0." Qual figura de linguagem?',
    options: ['Hipérbole', 'Metonímia', 'Eufemismo'],
    answer: 0
  },
  {
    question: '14. "Ela chorou rios de lágrimas." Qual figura de linguagem?',
    options: ['Hipérbole', 'Metáfora', 'Antítese'],
    answer: 0
  },
  {
    question: '15. "O tempo voa." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '16. "Ele não disse uma só palavra." Qual figura de linguagem?',
    options: ['Eufemismo', 'Antítese', 'Litote'],
    answer: 2
  },
  {
    question: '17. "A esperança é a última que morre." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '18. "Ele é fogo e gelo ao mesmo tempo." Qual figura de linguagem?',
    options: ['Paradoxo', 'Antítese', 'Metáfora'],
    answer: 0
  },
  {
    question: '19. "O homem é um lobo para o homem." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Metonímia'],
    answer: 0
  },
  {
    question: '20. "Ela estava entre a cruz e a espada." Qual figura de linguagem?',
    options: ['Metáfora', 'Antítese', 'Paradoxo'],
    answer: 0
  },
  {
    question: '21. "Ele está na flor da idade." Qual figura de linguagem?',
    options: ['Eufemismo', 'Metáfora', 'Antítese'],
    answer: 1
  },
  {
    question: '22. "A cidade nunca dorme." Qual figura de linguagem?',
    options: ['Personificação', 'Metonímia', 'Hipérbole'],
    answer: 0
  },
  {
    question: '23. "Ela é uma leoa defendendo seus filhos." Qual figura de linguagem?',
    options: ['Comparação', 'Metáfora', 'Ironia'],
    answer: 1
  },
  {
    question: '24. "Estou vendo tudo preto." Qual figura de linguagem?',
    options: ['Metáfora', 'Eufemismo', 'Antítese'],
    answer: 0
  },
  {
    question: '25. "Ele tem mãos de fada." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Hipérbole'],
    answer: 0
  },
  {
    question: '26. "O relógio correu durante a prova." Qual figura de linguagem?',
    options: ['Personificação', 'Metonímia', 'Ironia'],
    answer: 0
  },
  {
    question: '27. "Ele está entre a cruz e a espada." Qual figura de linguagem?',
    options: ['Metáfora', 'Antítese', 'Paradoxo'],
    answer: 0
  },
  {
    question: '28. "Ela é uma pedra no meu sapato." Qual figura de linguagem?',
    options: ['Metáfora', 'Hipérbole', 'Eufemismo'],
    answer: 0
  },
  {
    question: '29. "O mar estava bravo." Qual figura de linguagem?',
    options: ['Personificação', 'Comparação', 'Metáfora'],
    answer: 0
  },
  {
    question: '30. "O silêncio gritava naquela sala." Qual figura de linguagem?',
    options: ['Paradoxo', 'Personificação', 'Metáfora'],
    answer: 1
  },
  {
    question: '31. "Ele tem olhos de águia." Qual figura de linguagem?',
    options: ['Comparação', 'Metáfora', 'Antítese'],
    answer: 1
  },
  {
    question: '32. "A noite caiu rapidamente." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Hipérbole'],
    answer: 1
  },
  {
    question: '33. "Ela é uma flor." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '34. "Estou morrendo de rir." Qual figura de linguagem?',
    options: ['Hipérbole', 'Metáfora', 'Ironia'],
    answer: 0
  },
  {
    question: '35. "Ele tem um coração de gelo." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '36. "O vento dançava entre as árvores." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Hipérbole'],
    answer: 0
  },
  {
    question: '37. "Ela é uma fera nos estudos." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Ironia'],
    answer: 0
  },
  {
    question: '38. "Ele é um leão no trabalho." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '39. "O tempo é dinheiro." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Antítese'],
    answer: 0
  },
  {
    question: '40. "Ela estava com a cabeça nas nuvens." Qual figura de linguagem?',
    options: ['Metáfora', 'Eufemismo', 'Hipérbole'],
    answer: 0
  },
  {
    question: '41. "Ele é um rato de biblioteca." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '42. "O rio chorava suas mágoas." Qual figura de linguagem?',
    options: ['Personificação', 'Hipérbole', 'Metáfora'],
    answer: 0
  },
  {
    question: '43. "Ela tem olhos de lince." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '44. "O céu estava vestido de laranja." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Comparação'],
    answer: 0
  },
  {
    question: '45. "Ele é um poço de simpatia." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Hipérbole'],
    answer: 0
  },
  {
    question: '46. "O carro voava pela estrada." Qual figura de linguagem?',
    options: ['Hipérbole', 'Personificação', 'Metáfora'],
    answer: 2
  },
  {
    question: '47. "Ele está com um pé na cova." Qual figura de linguagem?',
    options: ['Eufemismo', 'Metáfora', 'Ironia'],
    answer: 0
  },
  {
    question: '48. "Ela tem mãos de fada." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '49. "O relógio correu durante a prova." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '50. "Ele é um peixe fora d’água." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '51. "Ela é uma pedra no meu caminho." Qual figura de linguagem?',
    options: ['Metáfora', 'Hipérbole', 'Antítese'],
    answer: 0
  },
  {
    question: '52. "O vento cantava sua canção." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '53. "Ele é um touro de forte." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '54. "Ela tem olhos de águia." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '55. "O tempo voa quando estou com você." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Hipérbole'],
    answer: 0
  },
  {
    question: '56. "Ele é um poço de paciência." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '57. "O mar estava nervoso." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Hipérbole'],
    answer: 0
  },
  {
    question: '58. "Ela é uma estrela no palco." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '59. "O vento assobiava forte." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '60. "Ele tem uma força de leão." Qual figura de linguagem?',
    options: ['Comparação', 'Metáfora', 'Antítese'],
    answer: 1
  },
  {
    question: '61. "O tempo passou voando." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Hipérbole'],
    answer: 0
  },
  {
    question: '62. "Ela é uma fera na matemática." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '63. "O rio engoliu a ponte." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '64. "Ele é um rato de academia." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '65. "O vento brincava com as folhas." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Hipérbole'],
    answer: 0
  },
  {
    question: '66. "Ela é uma joia rara." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '67. "O tempo é um mestre severo." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Antítese'],
    answer: 0
  },
  {
    question: '68. "Ele é um livro aberto." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '69. "O vento uivava na noite." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '70. "Ela é um anjo de pessoa." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '71. "O mar beijava a areia." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '72. "Ele é um vulcão de emoções." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '73. "O tempo cura todas as feridas." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '74. "Ela é uma máquina de estudar." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Antítese'],
    answer: 0
  },
  {
    question: '75. "O vento acariciava meu rosto." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '76. "Ele é um gigante no futebol." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '77. "O sol dourava a paisagem." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '78. "Ela é uma enciclopédia ambulante." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '79. "O vento sussurrava segredos." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '80. "Ele é um furacão de energia." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '81. "O rio corria apressado." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '82. "Ela é uma borboleta na vida." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '83. "O tempo devora tudo." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '84. "Ele é um vulcão de ideias." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '85. "O vento lambia as paredes." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '86. "Ela é uma tempestade de emoções." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '87. "O sol pintava o céu de vermelho." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '88. "Ele é uma rocha em meio à tempestade." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '89. "O vento arranhava as janelas." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '90. "Ela é uma fonte de alegria." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '91. "O tempo é um ladrão." Qual figura de linguagem?',
    options: ['Metáfora', 'Personificação', 'Comparação'],
    answer: 0
  },
  {
    question: '92. "Ele é uma muralha de coragem." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '93. "O mar engolia os barcos." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '94. "Ela é uma luz na escuridão." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '95. "O vento varria as ruas." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '96. "Ele é uma árvore frondosa de sabedoria." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '97. "O tempo apaga as lembranças." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '98. "Ela é uma chama de esperança." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  },
  {
    question: '99. "O vento desenhava formas no campo." Qual figura de linguagem?',
    options: ['Personificação', 'Metáfora', 'Comparação'],
    answer: 0
  },
  {
    question: '100. "Ele é uma ponte entre culturas." Qual figura de linguagem?',
    options: ['Metáfora', 'Comparação', 'Eufemismo'],
    answer: 0
  }
];

var questions = []; // será preenchido ao iniciar o quiz

var currentQuestion = 0;
var correctAnswers = 0;
var selectedOption = null;
var timerInterval = null;
var elapsedSeconds = 0;
var acertosSeguidos = 0;

// Barra de progresso
function updateProgressBar() {
  var fill = document.getElementById("progress-bar-fill");
  var text = document.getElementById("progress-text");
  var total = questions.length;
  var atual = currentQuestion;
  if (atual > total) atual = total;
  var percent = Math.round((atual / total) * 100);
  fill.style.width = percent + "%";
  text.textContent = "Pergunta " + (atual + 1 > total ? total : atual + 1) + " de " + total;
}

function showProgressBar() {
  document.getElementById("progress-bar-container").style.display = "block";
  updateProgressBar();
}

function hideProgressBar() {
  document.getElementById("progress-bar-container").style.display = "none";
}

// Cronômetro
function formatTime(sec) {
  var min = Math.floor(sec / 60);
  var s = sec % 60;
  return (min < 10 ? "0" : "") + min + ":" + (s < 10 ? "0" : "") + s;
}

function startTimer() {
  elapsedSeconds = 0;
  document.getElementById("timer").style.display = "block";
  document.getElementById("time").textContent = "00:00";
  timerInterval = setInterval(function () {
    elapsedSeconds++;
    document.getElementById("time").textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Telas principais
function showStartScreen() {
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("quitBtn").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("result").innerHTML = "";
  hideProgressBar();
  document.getElementById("feedback").textContent = "";
}

function startQuiz() {
  questions = getRandomQuestions(allQuestions, 20);
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("quitBtn").style.display = "inline-block";
  currentQuestion = 0;
  correctAnswers = 0;
  acertosSeguidos = 0;
  startTimer();
  showProgressBar();
  showQuestion();
}

function showQuestion() {
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var resultDiv = document.getElementById("result");
  var feedbackDiv = document.getElementById("feedback");
  resultDiv.textContent = "";
  feedbackDiv.textContent = "";
  selectedOption = null;
  document.getElementById("quitBtn").style.display = "inline-block";
  updateProgressBar();

  if (currentQuestion < questions.length) {
    var q = questions[currentQuestion];
    var html = '<div class="question">' + q.question + "</div><div class='options'>";
    for (var idx = 0; idx < q.options.length; idx++) {
      html +=
        '<label data-idx="' +
        idx +
        '"><input type="radio" name="option" value="' +
        idx +
        '"> ' +
        q.options[idx] +
        "</label>";
    }
    html += "</div>";
    quizDiv.innerHTML = html;
    nextBtn.style.display = "inline-block";
    nextBtn.disabled = true;
    quizDiv.style.display = "block";

    var labels = document.querySelectorAll(".options label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].onclick = function () {
        for (var j = 0; j < labels.length; j++) {
          labels[j].classList.remove("selected", "incorrect");
        }
        this.classList.add("selected");
        selectedOption = parseInt(this.getAttribute("data-idx"), 10);
        nextBtn.disabled = false;
      };
    }
    window.scrollTo(0, 0);
  } else {
    showResult();
  }
}

function checkAnswer() {
  if (selectedOption === null) {
    alert("Selecione uma opção!");
    return;
  }
  var correctIdx = questions[currentQuestion].answer;
  var labels = document.querySelectorAll(".options label");
  var feedbackDiv = document.getElementById("feedback");

  if (selectedOption === correctIdx) {
    labels[selectedOption].classList.add("selected");
    correctAnswers++;
    acertosSeguidos++;
    if (acertosSeguidos >= 3) {
      feedbackDiv.textContent = fraseAleatoria(frasesExcelencia);
    } else {
      feedbackDiv.textContent = fraseAleatoria(frasesAcerto);
    }
    setTimeout(function () {
      currentQuestion++;
      showQuestion();
    }, 900);
  } else {
    labels[selectedOption].classList.add("incorrect");
    labels[correctIdx].classList.add("selected");
    feedbackDiv.textContent = fraseAleatoria(frasesErro);
    acertosSeguidos = 0;
    setTimeout(function () {
      currentQuestion++;
      showQuestion();
    }, 1400);
  }
}

function showResult() {
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var restartBtn = document.getElementById("restartBtn");
  var quitBtn = document.getElementById("quitBtn");
  var resultDiv = document.getElementById("result");
  var feedbackDiv = document.getElementById("feedback");
  quizDiv.innerHTML = "";
  quizDiv.style.display = "none";
  nextBtn.style.display = "none";
  quitBtn.style.display = "none";
  feedbackDiv.textContent = "";
  stopTimer();
  hideProgressBar();
  var tempo = formatTime(elapsedSeconds);
  if (correctAnswers === questions.length) {
    resultDiv.innerHTML =
      '🎉 Parabéns! Você escapou da Biblioteca Encantada e acertou todas as questões!<br><span style="color:#1cb0f6;">⏱️ Seu tempo: ' +
      tempo +
      "</span>";
  } else {
    resultDiv.innerHTML =
      "Você acertou " +
      correctAnswers +
      " de " +
      questions.length +
      '.<br>⏱️ Seu tempo: ' +
      tempo +
      "<br>Tente novamente para escapar!";
  }
  restartBtn.style.display = "inline-block";
}

// Mostra resultado parcial ao desistir
function quitQuiz() {
  stopTimer();
  var resultDiv = document.getElementById("result");
  var quizDiv = document.getElementById("quiz");
  var nextBtn = document.getElementById("nextBtn");
  var restartBtn = document.getElementById("restartBtn");
  var quitBtn = document.getElementById("quitBtn");
  var feedbackDiv = document.getElementById("feedback");
  var tempo = formatTime(elapsedSeconds);
  var erros = currentQuestion - correctAnswers;
  quizDiv.innerHTML = "";
  quizDiv.style.display = "none";
  nextBtn.style.display = "none";
  quitBtn.style.display = "none";
  feedbackDiv.textContent = "";
  hideProgressBar();

  resultDiv.innerHTML =
    "<span style='color:#ff4b4b;'>Você desistiu do desafio.</span><br>" +
    "Acertos: <b>" + correctAnswers + "</b><br>" +
    "Erros: <b>" + erros + "</b><br>" +
    "Perguntas respondidas: <b>" + currentQuestion + "</b> de <b>" + questions.length + "</b><br>" +
    "⏱️ Seu tempo: " + tempo +
    "<br><br>Clique em <b>Reiniciar</b> para tentar novamente!";
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  showStartScreen();
}

// Inicialização dos eventos
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("startBtn").onclick = startQuiz;
  document.getElementById("nextBtn").onclick = checkAnswer;
  document.getElementById("restartBtn").onclick = restartGame;
  document.getElementById("quitBtn").onclick = quitQuiz;
  showStartScreen();
});
